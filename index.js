const express = require('express')
const app = express()
const port = 4000

const githubObj = (
    {
        "id": 760617896,
        "node_id": "R_kgDOLVYbqA",
        "name": "React-Series",
        "full_name": "Ravichandra89/React-Series",
        "private": false,
        "owner": {
          "login": "Ravichandra89",
          "id": 134200599,
          "node_id": "U_kgDOB_-9Fw",
          "avatar_url": "https://avatars.githubusercontent.com/u/134200599?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Ravichandra89",
          "html_url": "https://github.com/Ravichandra89",
          "followers_url": "https://api.github.com/users/Ravichandra89/followers",
          "following_url": "https://api.github.com/users/Ravichandra89/following{/other_user}",
          "gists_url": "https://api.github.com/users/Ravichandra89/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Ravichandra89/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Ravichandra89/subscriptions",
          "organizations_url": "https://api.github.com/users/Ravichandra89/orgs",
          "repos_url": "https://api.github.com/users/Ravichandra89/repos",
          "events_url": "https://api.github.com/users/Ravichandra89/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Ravichandra89/received_events",
          "type": "User",
          "site_admin": false
        },
        "html_url": "https://github.com/Ravichandra89/React-Series",
        "description": "Learning React",
        "fork": false,
        "url": "https://api.github.com/repos/Ravichandra89/React-Series",
        "forks_url": "https://api.github.com/repos/Ravichandra89/React-Series/forks",
        "keys_url": "https://api.github.com/repos/Ravichandra89/React-Series/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Ravichandra89/React-Series/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Ravichandra89/React-Series/teams",
        "hooks_url": "https://api.github.com/repos/Ravichandra89/React-Series/hooks",
        "issue_events_url": "https://api.github.com/repos/Ravichandra89/React-Series/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Ravichandra89/React-Series/events",
        "assignees_url": "https://api.github.com/repos/Ravichandra89/React-Series/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Ravichandra89/React-Series/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Ravichandra89/React-Series/tags",
        "blobs_url": "https://api.github.com/repos/Ravichandra89/React-Series/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Ravichandra89/React-Series/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Ravichandra89/React-Series/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Ravichandra89/React-Series/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Ravichandra89/React-Series/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Ravichandra89/React-Series/languages",
        "stargazers_url": "https://api.github.com/repos/Ravichandra89/React-Series/stargazers",
        "contributors_url": "https://api.github.com/repos/Ravichandra89/React-Series/contributors",
        "subscribers_url": "https://api.github.com/repos/Ravichandra89/React-Series/subscribers",
        "subscription_url": "https://api.github.com/repos/Ravichandra89/React-Series/subscription",
        "commits_url": "https://api.github.com/repos/Ravichandra89/React-Series/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Ravichandra89/React-Series/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Ravichandra89/React-Series/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Ravichandra89/React-Series/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Ravichandra89/React-Series/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Ravichandra89/React-Series/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Ravichandra89/React-Series/merges",
        "archive_url": "https://api.github.com/repos/Ravichandra89/React-Series/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Ravichandra89/React-Series/downloads",
        "issues_url": "https://api.github.com/repos/Ravichandra89/React-Series/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Ravichandra89/React-Series/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Ravichandra89/React-Series/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Ravichandra89/React-Series/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Ravichandra89/React-Series/labels{/name}",
        "releases_url": "https://api.github.com/repos/Ravichandra89/React-Series/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Ravichandra89/React-Series/deployments",
        "created_at": "2024-02-20T16:17:37Z",
        "updated_at": "2024-02-27T09:56:37Z",
        "pushed_at": "2024-02-27T10:14:00Z",
        "git_url": "git://github.com/Ravichandra89/React-Series.git",
        "ssh_url": "git@github.com:Ravichandra89/React-Series.git",
        "clone_url": "https://github.com/Ravichandra89/React-Series.git",
        "svn_url": "https://github.com/Ravichandra89/React-Series",
        "homepage": null,
        "size": 168,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [
      
        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main",
        "temp_clone_token": null,
        "network_count": 0,
        "subscribers_count": 1
      }
)

app.get('/',(req,res) => {
    res.send("Hello World");
})

app.get('/login',(req,res) => {
    res.send("Login Page ");
})

app.get('/youtube',(req,res) => {
    res.send("Welcome to Youtube Page");
})

app.get('/github',(req,res) => {
    res.json(githubObj);
})

app.get('/End',(req,res) => {
    res.send("End of the application");
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
})