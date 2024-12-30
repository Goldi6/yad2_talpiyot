#!/bin/bash

echo -e "module/messages\nsequelize_models" | xargs -I {} sh -c 'cd {}; npm link; cd ..; npm Yad2_AUTH_SERVER link ../{}'





# Purpose
# Local Development: This script is useful for local development where you want to link local packages together. 
# It allows you to make changes in one package and have those changes immediately reflected in another package that depends on it.
# Automatic Linking: By running this script, you ensure that any changes made in the module/messages or sequelize_models directories are automatically linked to the main project.
# This helps in testing and development without needing to manually reinstall or update the packages.