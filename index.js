const model = {
    currentStudent: null,
    students: [
        {
            name: "Ricardo",
            lastName: "García",
            cres: 0
        },
        {
            name: "Adrián",
            lastName: "Alzate",
            cres: 0
        },
        {
            name: "Adriana",
            lastName: "Cun",
            cres: 0
        },
        {
            name: "Gabriela",
            lastName: "Carranza",
            cres: 0
        },
        {
            name: "Daniela",
            lastName: "Rodríguez",
            cres: 0
        },
        {
            name: "Andrés",
            lastName: "Ramírez",
            cres: 0
        },
        {
            name: "Roberto",
            lastName: "Jaimes",
            cres: 0
        },
        {
            name: "Carolina",
            lastName: "Guerrero",
            cres: 0
        }
    ]
};

const controller = {
    onInit(){
        view.init();
    },

    getStudents(){
        return model.students;
    },

    addCre(i){
        model.students[i].cres ++;
        view.render();
    },

    diminishCre(i){
        model.students[i].cres--;
        view.render();
    },

    deleteStudent(i){
        model.students.splice(i, 1);
        view.render();
    }
};

const view = {
    init(){
        this.studentsTag = document.getElementById('students');
        this.render();
    },

    render(){
        let studentTag;
        let nameTag; let lastNameTag; let cresTag;
        let addTag; let diminishTag; let deleteTag;

        const students = controller.getStudents();

        this.studentsTag.innerHTML = '';

        for(let i = 0; i < students.length; i++){
            studentTag = document.createElement('div');
            studentTag.className = 'row';

            nameTag = document.createElement('p'); 
            nameTag.textContent = students[i].name;
            nameTag.className = "col-2 col-xs-2 col-sm-2 col-md-2"; 
            
            lastNameTag = document.createElement('p'); 
            lastNameTag.textContent = students[i].lastName;
            lastNameTag.className = "col-2 col-xs-2 col-sm-2 col-md-2";
            
            cresTag = document.createElement('p'); 
            cresTag.textContent = students[i].cres;
            cresTag.className = "col-2 col-xs-2 col-sm-2 col-md-2";
            
            addTag = document.createElement('img');
            addTag.src = './img/plus.png';
            addTag.className = "icon col-2 col-xs-2 col-sm-2 col-md-2";
            addTag.addEventListener(
                'click', function(i){controller.addCre(i)}
            );
            
            diminishTag = document.createElement('img');
            diminishTag.src = './img/minus.png';
            diminishTag.className = "icon col-2 col-xs-2 col-sm-2 col-md-2";
            diminishTag.addEventListener(
                'click', function(i){controller.diminishCre(i)}
            );
            
            deleteTag = document.createElement('img');
            deleteTag.src = './img/trash-can.png';
            deleteTag.className = "icon col-2 col-xs-2 col-sm-2 col-md-2";
            deleteTag.addEventListener(
                'click', function(i){controller.deleteStudent(i)}
            );

            studentTag.append(nameTag, lastNameTag, cresTag, addTag, diminishTag, deleteTag);
            this.studentsTag.appendChild(studentTag);
        }
    },
}

controller.onInit();

