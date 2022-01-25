const downloadGitRepo = require('download-git-repo') // 不支持 Promise

let requestUrl = 'wuguang/will-react-cli#v0.01';
//owner/name#my-branch
downloadGitRepo(requestUrl,'yourName',{clone:true},function(err){
    console.log(err);
});

