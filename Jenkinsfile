node {  
    
    stage('Checkout') {
        checkout scm
    }
    
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
    
    echo "Finished"
}
