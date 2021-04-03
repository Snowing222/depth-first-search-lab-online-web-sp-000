function findAdjacent(nodeName, vertices, edges){
   return edges.filter(edge=>edge.includes(nodeName)
    ).map(edge=>edge.find(a=>a!=nodeName)
    ).map(verticeName=>findNode(verticeName, vertices)
    ).filter(node=> node.discovered==null)
}


function findNode(verticeName, vertices){
    return vertices.find(vertice=>vertice.name == verticeName)
}


function depthFirstSearch(rootNode, vertices, edges){
    let stack = [rootNode]
    let orderedQueue = []
    while(stack.length!=0){
        let currentNode = stack.pop()
        currentNode.discovered = true
        let nodes = findAdjacent(currentNode.name, vertices, edges)
        console.log(nodes)
        stack = stack.concat(nodes)
        orderedQueue.push(currentNode)
    }

    return orderedQueue
}


  
// function depthFirstSearch(rootNode, vertices, edges){
// 		let stack = []
// 		stack.push(rootNode)
// 		let visited = [rootNode]

// 		while(stack.length != 0){
// 			// console.log(`first element in stack is ${stack[0].name}`)
// 			let v = stack.pop()
// 			if(!v.discovered){
// 				v.discovered = true

// 				findAdjacent(v.name, vertices, edges).forEach(function(node){
// 					visited.push(node)
// 					stack.push(node)
// 				})
// 			}
// 		}
// 		return visited;
// }




