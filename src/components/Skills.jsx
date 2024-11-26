import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const Skills=() => {
  let tabs = [
    {
      id: "Frontend",
      label: "Frontend",
      content: "React HTML5 CSS3 JavaScript"
    },
    {
      id: "Backend",
      label: "Backend",
      content: "Node.js Express MongoDB PostgreSQL"
    },
    {
      id: "Technologies",
      label: "Technologies",
      content: "Git AWS Docker CI/CD"
    }
  ];

  return (
    <section id="projects" className="h-screen flex flex-col items-center justify-center" >
      <h1>Skills</h1>
      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </section>  
  );
}

export default Skills;