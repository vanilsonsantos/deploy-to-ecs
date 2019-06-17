node {  
    
    def projects = ["back-end", "front-end"]
    def jobs = [:]

    projects.each{
        project -> jobs["${project} flow triggered"] = {
            build job: 'pipeline-flow', 
            parameters: [string(name: 'projectName', value: "${project}")],
            quietPeriod: 2
        }
    }
    parallel jobs

    
    echo "Terminou"
}
