pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t mynodeimg .'
        sh 'docker tag mynodeimg $DOCKER_BFLASK_IMAGE'
      }
    }
    
    stage('Deploy') {
      steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_REGISTRY_CREDS}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
          sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin docker.io"
          sh 'docker push $DOCKER_BFLASK_IMAGE'
        }
      }
    }
    
  }

  post{
      always{
            sh 'docker rm -f mynodeapp'
            sh 'docker run --name mynodeapp -d -p 3000:3000 my-nodeimg'
            
        }
}

}

