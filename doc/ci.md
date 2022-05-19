# CI Pipeline
https://dev.azure.com/IET-hazi-2022/Houston/_build?definitionId=1

## Pipeline
A CI Pipeline-t Azure Devops-on keresztül hoztuk létre.
Az Azure-os accountot hozzá kellett linkelni a GitHub-os accounthoz, hogy hozzáférést kapjunk a repositoryhoz.
Ezután létrehoztam egy build pipeline-t, ami egy azure-pipelines.yml fájlt hozott létre.
Ebben a fájlban létrehoztam egy gradle task-ot.
A task-ban definiáltam, hogy milyen java verzióval (1.11) és milyen gradle wrapperel (gradlew)

## Agent pool

Mivel nem akartam pénzt kiadni cloud computing service-re ezért a saját gépemen futtattam az Azure Pipeline Agent-jét.
Enviroment változókban meg kellett adni a java, meg az android sdk path-ját és utána be kellett regisztrálnom az agent-et egy PAT segítségével, majd után amikor elindítottam, sikeresen lefuttatta a Job-ot.