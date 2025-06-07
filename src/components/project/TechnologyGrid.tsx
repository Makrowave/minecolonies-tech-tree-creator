import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import type {RootState} from "../../stores/Store.ts";
import {useEffect, useMemo, useRef} from "react";
import Technology, {type TechnologyType} from "./Technology.tsx";
import {ArcherContainer, type ArcherContainerRef, ArcherElement} from "react-archer";

const cols = [
  {
    researchLevel: 1,
    title: "Level 1 (0.5hr)"
  },
  {
    researchLevel: 2,
    title: "Level 2 (1hr)"
  },
  {
    researchLevel: 3,
    title: "Level 3 (2hr)"
  },
  {
    researchLevel: 4,
    title: "Level 4 (4hr)"
  },
  {
    researchLevel: 5,
    title: "Level 5 (8hr)"
  },
  {
    researchLevel: 6,
    title: "Level 6 (16hr)"
  },
]

const techHeight = 150
const techWidth = 400
const spacing = 60

export default function TechnologyGrid() {
  const project = useSelector((state: RootState) => state.project)
  const activeProject = useSelector((state: RootState) => state.activeProject)

  const technologies = useMemo(() => (
    project.namespaces.find((n) => n.name === activeProject.currentNamespace)?.branches.find((b) => b.name === activeProject.currentBranch)?.technologies || []
  ), [activeProject.currentBranch, activeProject.currentNamespace, project.namespaces])

  const { allTechnologies, maxY } = useMemo(() => {
    const sortedTechnologies = [...technologies].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
    const rootTechnologies = sortedTechnologies.filter((t) => t.researchLevel === 1)

    let allTechs: Array<TechnologyNode> = []
    let currentY = 0

    // Process each root technology tree
    for (const rootTech of rootTechnologies) {
      const {start: tree, y: treeMaxY} = createTree(sortedTechnologies, {
        parent: null,
        children: [],
        value: rootTech,
        y: currentY
      })

      const techListInTree = flattenTree(tree, [])
      allTechs = [...allTechs, ...techListInTree]

      // Move to next available Y position for next root technology
      currentY = treeMaxY + 1
    }

    const finalMaxY = Math.max(...allTechs.map(t => t.y))

    return {
      allTechnologies: allTechs,
      maxY: finalMaxY
    }
  }, [technologies])


  const archerRef = useRef<ArcherContainerRef>(null)

  useEffect(() => {
    const handleScroll = () => {
        if(archerRef) {
          archerRef.current?.refreshScreen()
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <ArcherContainer
      ref={archerRef}
      noCurves
      endMarker={false}
      startMarker={true}
      strokeColor={"black"}
    >
      <Box sx={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
        {/* Column Headers */}
        <Box sx={{display: 'flex', mb: 2, position: 'sticky', top: 0, zIndex: 10, width: `${(techWidth+spacing)*6}px` , bgcolor: 'background.paper'}}>
          {cols.map((col) => (
            <Box
              key={col.researchLevel}
              sx={{
                width: `${techWidth}px`,
                mr: `${spacing}px`,
                textAlign: 'center'
              }}
            >
              <Typography variant="h6">{col.title}</Typography>
            </Box>
          ))}
        </Box>

        {/* Technology Grid */}
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            position: "relative",
            height: `${(maxY + 1) * (techHeight + spacing)}px`,
            minHeight: '400px'
          }}
        >
          {allTechnologies.map((tech) => (
            <Box
              key={tech.value.name}
              sx={{
                position: "absolute",
                left: `${(techWidth + spacing) * (tech.value.researchLevel - 1)}px`,
                top: `${(techHeight + spacing) * tech.y}px`,
                pr: `${spacing}px`,
                pb: `${spacing}px`,
                width: `${techWidth}px`,
                height: `${techHeight}px`,
              }}
            >
              <ArcherElement
                id={createLikeParentName(tech.value)}
                relations={
                  tech.value.parentResearch ? [
                    {
                      targetId: tech.value.parentResearch,
                      targetAnchor: 'right',
                      sourceAnchor: 'left',
                    }
                  ] : []
                }
              >
                <Technology technology={tech.value}/>
              </ArcherElement>
            </Box>
          ))}
        </Box>
      </Box>
    </ArcherContainer>
  )
}

type TechnologyNode = {
  parent: TechnologyNode | null,
  children: TechnologyNode[],
  value: TechnologyType
  y: number
};


const createLikeParentName = (technology: TechnologyType) => {
  const splitName = technology.name.split(".")
  return `${technology.branch}/${splitName[splitName.length-2]}`
}


const createTree = (technologies: TechnologyType[], start: TechnologyNode) => {
  const name = createLikeParentName(start.value)
  let currentY = start.y

  for(const tech of technologies) {
    if(tech.parentResearch === name) {
      // Create child node at current Y level
      const node = {parent: start, children: [], value: tech, y: currentY}

      // Recursively build subtree
      const {start: nodeWithChildren, y: subtreeEndY} = createTree(technologies, node)

      // Add the completed child to parent
      start.children.push(nodeWithChildren)

      // Update currentY to continue after this subtree
      // If the child had its own children, subtreeEndY will be greater than currentY
      // If no children, subtreeEndY equals currentY, so we increment by 1
      currentY = Math.max(subtreeEndY, currentY) + 1
    }
  }

  // Return the final Y position (either start.y if no children, or last child's end position - 1)
  const finalY = start.children.length > 0 ? currentY - 1 : start.y
  return {start, y: finalY}
}


const flattenTree = (tree: TechnologyNode, result: TechnologyNode[] = []) => {
  result.push(tree)
  tree.children.forEach((t) => {
    result = flattenTree(t, result);
  })
  return result;
}