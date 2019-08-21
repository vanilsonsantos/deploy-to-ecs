node {  
        
    stage('Checkout') {
        git url: 'https://github.com/vanilsonsantos/deploy-to-ecs.git'

    }
    
    stage('Triggering projects') {
        def projectsHaveChange = []
        def jobs = [:]
        def publisher = LastChanges.getLastChangesPublisher "PREVIOUS_REVISION", "SIDE", "LINE", true, true, "", "", "", "", ""
            publisher.publishLastChanges()
            def changes = publisher.getLastChanges()
            for (commit in changes.getCommits()) {
                projectsHaveChange = commit.getChanges().split(' ')
                    .findAll { line -> 
                        file = line.startsWith('a/') 
                        file
                    }
                    .collect { file -> 
                        projectFolder = file.split('/')[1] 
                        projectFolder
                    }
                    .unique(false)
                    .findAll { projectFolder -> 
                        def stepsPipelineFilePath = "${pwd()}/${projectFolder}/steps.pipeline"
                        fileExists(stepsPipelineFilePath) 
                    }
            }
        
        println projectsHaveChange

        projectsHaveChange.each{
            project -> 
                jobs["${project}"] = {
                    build job: "${project}", 
                    parameters: [],
                    quietPeriod: 2
                }
        }
        parallel jobs
    }
    
    
    echo "Finished"
}
