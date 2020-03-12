import axios from 'axios'

export async function list() {
  return axios.get('./api/list')
    .then(({ data = [] }) => (data || []).map((item) => {
      const temp = item
      temp.projectName = item.name
      delete temp.name
      return {
        ...temp,
        status: [],
      }
    }))
}

export async function getBranchList(key) {
  return axios.get('./api/branchList', {
    params: {
      key,
    },
  })
}

export async function getCommitList(key, branch) {
  return axios.get('./api/commitList', {
    params: {
      key,
      branch,
    },
  })
    .then(res => res.data)
}

export async function deploy(key, br) {
  return axios.get('./api/deploy', {
    params: {
      key,
      br,
    },
  })
    .then(res => res.data)
}

export async function getProgress() {
  return axios.get('./api/getProgress')
    .then(res => res.data)
}