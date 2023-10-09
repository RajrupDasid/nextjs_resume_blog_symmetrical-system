import React from "react";
import "@/public/assets/css/projects.scss";
import Image from "next/image";
import ml from "@/public/assets/images/ml.png";
export default function Projects() {
  return (
    <>
      <div className="blogstyings">
        <article className="cards">
          <Image
            className="card__background"
            src={ml}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width={1920}
            height={2193}
          />
          <div className="card__content | flow">
            <div className="card__content--container | flow">
              <h2 className="card__title">Colombia</h2>
              <p className="card__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                in labore laudantium deserunt fugiat numquam.
              </p>
            </div>
            <button className="card__button">Read more</button>
          </div>
        </article>
      </div>
    </>
  );
}
