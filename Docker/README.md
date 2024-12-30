



1. Setup .env file next to the compose.yaml:
    
   
    LOCALSTACK_VOLUME_DIR="./DockerVolumes/ProjectName/localstack"
    POSTGRES_VOLUME_DIR="./DockerVolumes/ProjectName/postgres"
    POSTGRES_PASSWORD = "Connect123"

2. compose containers:
    <!-- docker compose --env-file ./dev.env -p yad2 up
    docker compose --env-file ./dev.env -p yad2 up -d (not all variables age working [ex: LOCAL_POSTGRES_VOLUME_LOCATION])-->
    (-d for running in the background)
    
    docker compose -p yad2 up -d


* ! --you must set-- the postgres password manually in the container terminal!:
* : su - postgres -c 'psql'   (regular: psql -h localhost -U postgres)
* : \password postgres
* enter password twice


 - ! if your prompt changes fro '#=' t0 '#-' means the command is incomplete and postgres is waiting for the following prompt (don't forget ';' in the end..')  
* create the database:
    create database yad2;
