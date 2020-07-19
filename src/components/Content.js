import React from "react";
import ProjectCard from "./ProjectCard";

const Content = () => {
  return (
    <div className="content">
      <div className="work">
        <div className="work__projects">
          <div className="work__project work__project--1">
            <ProjectCard
              cardHeader={"2020"}
              projectName={"Tripster"}
              projectDescription={
                "An E-Commerce based web application where the users can book flights and hotels. Payment gateway integrated using Braintree's API."
              }
              imageUrl={"../img/Tripster.png"}
              cardFooter={"mern web app"}
            />
          </div>
          <div className="work__project work__project--2">
            <ProjectCard
              cardHeader={"2020"}
              projectName={"Shoppersonic"}
              projectDescription={
                "An E-Commerce based web application where the users can add products to cart and checkout. Payment gateway integrated using Braintree's API."
              }
              imageUrl={"./Shoppersonic.png"}
              cardFooter={"mern web app"}
            />
          </div>
          <div className="work__project work__project--3">
            <ProjectCard
              cardHeader={"2020"}
              projectName={"Nexter"}
              projectDescription={
                "A website frontend (only) built using HTML and CSS using the SASS with SCSS syntax."
              }
              imageUrl={"./Nexter_cropped.png"}
              cardFooter={"website frontend"}
            />
          </div>
          <div className="work__project work__project--4">
            <ProjectCard
              cardHeader={"2020"}
              projectName={"Natours"}
              projectDescription={
                "A website frontend (only) built using HTML and CSS using the SASS with SCSS syntax."
              }
              imageUrl={"./Natours_cropped.png"}
              cardFooter={"website frontend"}
            />
          </div>
          <div className="work__project work__project--5">
            <ProjectCard
              cardHeader={"2020"}
              projectName={"Trillo"}
              projectDescription={
                "A website frontend (only) built using HTML and CSS using the SASS with SCSS syntax."
              }
              imageUrl={"./Trillo.png"}
              cardFooter={"website frontend"}
            />
          </div>
          <div className="work__project work__project--6">
            <ProjectCard
              cardHeader={"2020"}
              projectName={"Keeper"}
              projectDescription={
                "A MERN based Google Keep clone. The user can save notes in this app and delete them. Backend built using RESTful API concept."
              }
              imageUrl={"./Keeper.jpg"}
              cardFooter={"mern web app"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
