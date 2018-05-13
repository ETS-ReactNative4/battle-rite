const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiN2Q4ZGE1MC0yMzFjLTAxMzYtYjIxYy0wYTU4NjQ2MGI5M2QiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIzODI1NDk5LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxlZnVyeSIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.OyIm-2hdmXzn2dCL8ryK6TetKp3ye4rbU18xV4fBdc0'

const battleriteAPI = {
    url: 'https://api.dc01.gamelockerapp.com/shards/global',
    header: {
        authorization: `Bearer ${key}`,
        accept: 'application/vnd.api+json',
    }
}

export default battleriteAPI