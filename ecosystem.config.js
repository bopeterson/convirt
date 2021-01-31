module.exports = {
  apps: [{
    name: 'convirt',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-59-195-182.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/bop-macbop.pem',
      ref: 'origin/master',
      repo: 'git@github.com:bopeterson/convirt.git',
      path: '/home/ubuntu/convirt',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
