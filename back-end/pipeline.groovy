#!/usr/bin/env groovy

import hudson.model.*
import hudson.EnvVars
import groovy.json.JsonSlurperClassic
import groovy.json.JsonBuilder
import groovy.json.JsonOutput
import java.net.URL

class Pipeline {

    def Pipeline() {}

    def runTests() {
        node {
             echo "Rodando os tests back-end"
        }
    }

}