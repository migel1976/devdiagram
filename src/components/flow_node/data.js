// var orgItems = [{  
//         "id":"101",
//         "text":"Development",
//     },{  
//         "id":"102",
//         "text":"Javascript\nTeam",
//     },{  
//         "id":"103",
//         "text":"ASP.NET\nTeam",
//     }];
 
//     var orgLinks = [{  
//         "id":"121",
//         "from":"101",
//         "to":"102",
//     },{  
//         "id":"122",
//         "from":"101",
//         "to":"103",
//     }];

var flowNodes = [
  {
    'id': 101,
    'text': 'A new ticket',
    // 'type': 'terminator'
    'type': 'triangle',
	'zindex':0
  },
  {
    'id': 102,
    'text': 'Analyze the issue',
    'type': 'process'
  },
  // {
  //   'id': 103,
  //   'text': 'Do we have all information to work with?',
  //   'type': 'diamond'
  // },
  // {
  //   'id': 104,
  //   'text': 'Analyze the issue',
  //   'type': 'process'
  // },
  // {
  //   'id': 105,
  //   'text': 'Analyze the issue',
  //   'type': 'process'
  // },
,
];
var flowEdges = [
  {
    'fromId': 101,
    'id':121,
    'text': null,
    'toId': 102,
	'endExpr':'filledTriangle',
	'styleExpr':{'stroke-dasharray':'4'}
	
  },
  // {
  //   'fromId': 101,
  //   'id':122,
  //   'text': null,
  //   'toId': 103
  // },
  // {
  //   'fromId': 101,
  //   'id':123,
  //   'text': null,
  //   'toId': 104
  // },
  // {
  //   'fromId': 101,
  //   'id':124,
  //   'text': null,
  //   'toId': 105
  // },
];

export default {
  getFlowNodes() {
    return flowNodes;
  },
  getFlowEdges() {
    return flowEdges;
  }
};

