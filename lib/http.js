// 通过 axios 获取结果

const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get('https://api.github.com/orgs/zhurong-cli/repos')


  //https://api.github.com/repos/wuguang/will-react-cli

  //获取 tag 列表
  //https://api.github.com/repos/wuguang/will-react-cli/tags

}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo,tags) {
  return axios.get(`https://api.github.com/repos/wuguang/will-react-cli/tags`)
}

module.exports = {
  getRepoList,
  getTagList
}