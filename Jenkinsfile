pipeline {
    
    agent {
        label "linuxbuildnode"
    }
    
    stages {
        stage('SCM') {
            steps {
                
                echo "downloading git data..........."
                
                sh "sudo rm -rf endtoendpipeline endtoendpipeline@tmp/"
                
                //git 'https://github.com/tripathimanoj/jenkins-docker-maven-java-webapp.git' // this one is for maven java project
                //git 'https://github.com/tripathimanoj/devops-pipeline.git' // this one is for webapp ==> Ashish Verma
                git 'https://github.com/tripathimanoj/devopspipeline2.git' // this one if for webapp ==> Kuldeep Prakash
                
                echo "git data downloaded............"
                
                //sh "sudo cp /home/ec2-user/jenkinsws/workspace/endtoendpipeline/index.html  /var/www/html/"
                //sh "sudo cd /var/www/html/mywebsite"
                sh "sudo rm -rf /var/www/html/*"
                sh "sudo cp -r /home/ec2-user/jenkinsws/workspace/endtoendpipeline/* /var/www/html/"
                
            }
            
        }
        
        stage('Build by Maven Package') {
            // This stage is to build maven package...
            steps {
                echo "this is skipping... becaue the repo is alredy having .war package created if we build it agian it will give error"
                //sh 'mvn clean package'
            }
            
        }
        
        stage('Build Docker own image') {
            // This stage is for building docker image
            steps {
                
                echo "Building docker image............."
                
                sh "sudo docker build -t manojtripathi/javawebimage:${BUILD_TAG} ."
                
                echo "Image build done......................"
            }
        }
        
        stage('Push image to Docker Hub') {
            // This stage if for pushing docker image to Docker Hub
            steps {
                
                echo "login to docker hub and pushing image to docker hub............."
                
                withCredentials([string(credentialsId: 'DOCKER_HUB_PWD', variable: 'DOCKER_HUB_PASS_CODE')]) {
    // some block
                sh "sudo docker login -u manojtripathi -p $DOCKER_HUB_PASS_CODE"
}
                sh "sudo docker push manojtripathi/javawebimage:${BUILD_TAG}"
                
                echo " *************** Docker image pushed successfully to Docker Hub ***************** "
                
                
            }
        }
        
        
        stage(' Deploy web app in DEV ENV ') {
            steps {
                
                echo "Deploying docker image to Dev env........."
                
                //sh "sudo docker run -d -p 8080:8080 --name myjavaapp-2 manojtripathi/javawebimage:${BUILD_TAG}"
                
                echo " ****************************Successfully Deployed to Dev Env *************************************** "
                
                
            }
        }
        
        
        
        
        
    }
}

