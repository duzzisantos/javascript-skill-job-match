//AN ARRAY OF SKILLS
const skills = [
    {
      id: 0,
      skill: "programming",
    },
    {
      id: 1,
      skill: "database",
    },
    {
      id: 2,
      skill: "data analysis",
    },
    {
      id: 3,
      skill: "sales",
    },
    {
      id: 4,
      skill: "marketing",
    },
    {
      id: 5,
      skill: "welding",
    },
    {
      id: 6,
      skill: "construction",
    },
    {
      id: 7,
      skill: "woodwork",
    },
    {
      id: 8,
      skill: "electrical",
    },
    {
      id: 9,
      skill: "mechanical",
    },
    {
      id: 10,
      skill: "legal",
    },
    {
      id: 11,
      skill: "financial",
    },
  ];
  
  //AN ARRAY OF OBJECTS OF JOBS
  const jobs = [
    {
      id: 0,
      title: "Software Developer.",
      salary: "$95,000 to $275,000",
      role: "A Software Developer designs, tests and releases software by writing computer codes in different languages. They often work as Web Developers, Mobile Developers or Product Managers.",
      requiresDegree: true,
      image:
        "https://qaieschool.com/wp-content/uploads/2020/11/SOFTWARE-ENGINEER.jpg",
    },
    {
      id: 1,
      title: "Database Manager.",
      salary: "$75,000 to $108,000",
      role: "A Database Manager designs, manages, administers and secures enterprise data through cloud and data servers. As enterprise data continues to grow, demand for database professionals will grow.",
      requiresDegree: true,
      image:
        "https://canadianbusinesscollege.com/wp-content/uploads/Aug-16-database-administrator-program.jpg",
    },
    {
      id: 2,
      title: "Data Analyst.",
      salary: "$75,000 to $140,000",
      role: "A Data Analyst designs data models, mines data, and analyses enterprise data with programming languages and analytical tools. These professionals develop insights with data.",
      requiresDegree: true,
      image:
        "https://www.techgamingreport.com/wp-content/uploads/2020/11/Data-Analyst.jpeg",
    },
    {
      id: 3,
      title: "Sales professional.",
      salary: "$45,000 to $82,000",
      role: "Depending on their seniority level, a career in sales is a rewarding one. Either you are meeting clients and selling products to them or you are analysing and making management decisions on behalf of customers.",
      requiresDegree: true,
      image:
        "https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2015/10/Happy-Car-Salesman-closing-deal-1024x641.jpg",
    },
    {
      id: 4,
      title: "Marketing professional.",
      salary: "$55,000 to $120,000",
      role: "Marketing professionals plan and manage the company's marketing program. One might work in Advertising, Market Analysis, CRM, as a policy-maker, or in Digital Marketing.",
      requiresDegree: true,
      image: "https://blog.hubspot.com/hubfs/agency-fee-structure.jpg",
    },
    {
      id: 5,
      title: "Welding construction.",
      salary: "$36,000 to $50,000",
      role: "Who builds gates, frameworks for construction, or hand railings at the train station? It is the welders! Welders usually have to do an apprenticeship, then start their own businesses or work in construction companies.",
      requiresDegree: false,
      image:
        "https://media.istockphoto.com/photos/welding-argon-results-welding-on-the-metal-of-the-foreground-picture-id1310455312?b=1&k=20&m=1310455312&s=170667a&w=0&h=kA-JusfVkUFCXDTFe-SRvvT_pvwwjgvFRHOvz0G30uI=",
    },
    {
      id: 6,
      title: "Building construction.",
      salary: "$40,000 to $80,000",
      role: "Depending on one's specialty, a career in Building Construction could be lucrative. Popular roles here include: Construction Manager, Civil Engineer, Building Technologist, Quantity Surveyor and so on. A degree is optional in some cases.",
      requiresDegree: true,
      image:
        "https://www.worldconstructiontoday.com/wp-content/uploads/2020/11/constructon-worker-wellfare.jpg",
    },
    {
      id: 7,
      title: "Wood construction.",
      salary: "$40,000 to $60,000",
      role: "Those who are skilled in working with wood usually work in construction, furniture production, and wooden hardware manufacturing. One could be a carpenter or shipbuilder as well.",
      requiresDegree: false,
      image:
        "https://st2.depositphotos.com/6672578/10090/i/600/depositphotos_100906810-stock-photo-craftsman-cutting-plank-with-circular.jpg",
    },
    {
      id: 8,
      title: "Electrical Engineer | Electrical Technician.",
      salary: "$70,000 to $140,000",
      role: "A career in the electrical field entails developing, working with or maintaining electrical systems. One would typically have to be formally trained in this field.",
      requiresDegree: true,
      image:
        "https://www.careergirls.org/wp-content/uploads/2018/03/Electrical_Engineer_2_1920X10180.jpg",
    },
    {
      id: 8,
      title: "Mechanical Engineer | Mechanical Technician.",
      salary: "$60,000 to $140,000",
      role: "A career in the mechanical field entails developing, working with or maintaining mechanical systems. One would typically have to be formally trained in this field.",
      requiresDegree: true,
      image:
        "https://www.asml.com/-/media/asml/images/careers/job-categories/mechanical-engineering/47097-lab-h2-2019-experiment.jpg?mw=1920&rev=b39335a885c94ae6ba3032e28e3837ae&hash=0C564324B959209BE77672E187E9E386",
    },
    {
      id: 9,
      title: "Lawyer | Paralegal.",
      salary: "$70,000 to $120,000",
      role: "People with legal skills often work as lawyers or paralegals, depending on their qualifications. There are so many specialisations in this field - which makes it quite appealing.",
      requiresDegree: true,
      image:
        "https://cdn.todaymediainc.com/wp-content/uploads/sites/6/2021/08/top-lawyers-feature.jpg",
    },
    {
      id: 10,
      title: "Financial Analyst | Banker.",
      salary: "$80,000 to $190,000",
      role: "If you have solid quantitative and decision-making skills, then you will fit right into this path. Finance professionals work both in the public and private sector.",
      requiresDegree: true,
      image:
        "https://bankingblog.accenture.com/wp-content/uploads/2020/10/Woman_Banker-e1570041579441.jpeg",
    },
  ];
  
  //DECLARE ELEMENT VARIABLES
  
  let x = document.getElementById("mySearch");
  let myImage = document.getElementById("search-image");
  let theImage = document.getElementById("the-image");
  let myInfo = document.getElementById("search-info");
  let myResult = document.getElementById("search-result");
  let container = document.querySelector(".container");
  
  let myTitle = document.getElementById("job-title");
  let mySalary = document.getElementById("job-salary");
  let myRole = document.getElementById("job-role");
  let degree = document.getElementById("requires-degree");
  
  
  //ITERATE JOBS AND SKILLS
  const inputChange = () => {
    for (let i = 0; i < skills.length; i++) {
      for (let j = 0; j < jobs.length; j++) {
        if (x.value === skills[i].skill) {
          setTimeout(() => {
            let loader = document.createElement("div");
            loader.id = "loader";
            container.appendChild(loader);
            loader.style.display = "block";
            setTimeout(() => {
              container.removeChild(loader);
              myResult.style.display = "flex";
              theImage.src = jobs[i].image;
              myTitle.innerText = `${jobs[i].title}`;
              mySalary.innerText = `Salary: ${jobs[i].salary}`;
              myRole.innerText = `Role: ${jobs[i].role}`;
              degree.innerText = `Requires degree: ${jobs[i].requiresDegree}`;
              console.log("engineering");
            }, 3000);
          }, 2000);
        }
      }
    }
  };
  
  
  
