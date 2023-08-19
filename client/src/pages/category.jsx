import React from "react";
import "./category.css";
import { useState } from "react";

function category() {
  const [Men, setMen] = useState("false");
  const [Women, setWomen] = useState("false");
  const [Kids, setKids] = useState("false");
  const [Mouse, setMouse] = useState("false");
  const [Chargers, setChargers] = useState("false");
  const [Makeup, setMakeup] = useState("false");
  const [Fitness, setFitness] = useState("false");
  const [Keyboards, setKeyboards] = useState("false");
  const [Combs, setCombs] = useState("false");
  const [Refrigerators, setRefrigerators] = useState("false");
  const [Laptops, setLaptops] = useState("false");
  const [Airconditioners, setAirconditioners] = useState("false");
  const [Perfumes, setPerfumes] = useState("false");
  const [Smartphones, setSmartphones] = useState("false");

  const set = new Set();

  const ChangeMen = (event) => {
    const Type = event.target.value;
    let val=!Men;
    console.log(val);

    setMen(!Men);

    if (Men) {
      let arr=[Type];
      const newSet = new Set([ ...set,...arr ]);
      console.log(newSet);
      // const tempset = new set([...Airconditioners.])
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeWomen = (event) => {
    const Type = event.target.value;
    let val=!Women;
    console.log(val);

    setWomen(!Women);

    if (Women) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeKids = (event) => {
    const Type = event.target.value;
    let val=!Kids;
    console.log(val);

    setKids(!Kids);

    if (Kids) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeMouse = (event) => {
    const Type = event.target.value;
    let val=!Mouse;
    console.log(val);

    setMouse(!Mouse);

    if (Mouse) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeChargers = (event) => {
    const Type = event.target.value;
    let val=!Chargers;
    console.log(val);

    setChargers(!Chargers);

    if (Chargers) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeMakeup = (event) => {
    const Type = event.target.value;
    let val=!Makeup;
    console.log(val);

    setMakeup(!Makeup);

    if (Makeup) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeFitness = (event) => {
    const Type = event.target.value;
    let val=!Fitness;
    console.log(val);

    setFitness(!Fitness);

    if (Fitness) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeKeyboards = (event) => {
    const Type = event.target.value;
    let val=!Keyboards;
    console.log(val);

    setKeyboards(!Keyboards);

    if (Keyboards) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeCombs = (event) => {
    const Type = event.target.value;
    let val=!Combs;
    console.log(val);

    setCombs(!Combs);

    if (Combs) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeRefrigerators = (event) => {
    const Type = event.target.value;
    let val=!Refrigerators;
    console.log(val);

    setRefrigerators(!Refrigerators);

    if (Refrigerators) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeLaptops = (event) => {
    const Type = event.target.value;
    let val=!Laptops;
    console.log(val);

    setLaptops(!Laptops);

    if (Laptops) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeAirconditioners = (event) => {
    const Type = event.target.value;
    let val=!Airconditioners;
    console.log(val);

    setAirconditioners(!Airconditioners);

    if (Airconditioners) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangePerfumes = (event) => {
    const Type = event.target.value;
    let val=!Perfumes;
    console.log(val);

    setPerfumes(!Perfumes);

    if (Perfumes) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  const ChangeSmartphones = (event) => {
    const Type = event.target.value;
    let val=!Smartphones;
    console.log(val);
    setSmartphones(!Smartphones);

    if (Smartphones) {
      set.add(Type);
      console.log(set);
    } else {
      console.log("false");
      if (set.has(Type)) {
        set.delete(Type);
      }
      console.log(set);
    }
  };

  return (
    <>
      <h2 className="mx-5 mt-4 category-col">Categories</h2>

      <div className="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="men"
          id="flexCheckDefault"
          onChange={ChangeMen}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Men
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="women"
          id="flexCheckDefault"
          onChange={ChangeWomen}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Women
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="kids"
          id="flexCheckDefault"
          onChange={ChangeKids}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Kids
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="mouse"
          id="flexCheckDefault"
          onChange={ChangeMouse}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Mouse
        </label>
      </div>
      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="smartphones"
          id="flexCheckDefault"
          onChange={ChangeSmartphones}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Smartphones
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="chargers"
          id="flexCheckDefault"
          onChange={ChangeChargers}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Chargers
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="makeup"
          id="flexCheckDefault"
          onChange={ChangeMakeup}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Makeup
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="fitness"
          id="flexCheckDefault"
          onChange={ChangeFitness}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Fitness
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="keyboards"
          id="flexCheckDefault"
          onChange={ChangeKeyboards}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Keyboards
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="combs"
          id="flexCheckDefault"
          onChange={ChangeCombs}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Combs
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="refrigerators"
          id="flexCheckDefault"
          onChange={ChangeRefrigerators}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Refrigerators
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="laptops"
          id="flexCheckDefault"
          onChange={ChangeLaptops}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Laptops
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="airConditoners"
          id="flexCheckDefault"
          onChange={ChangeAirconditioners}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Air Conditoners
        </label>
      </div>

      <div class="form-check mx-5 my-1.5">
        <input
          class="form-check-input"
          type="checkbox"
          value="perfumes"
          id="flexCheckDefault"
          onChange={ChangePerfumes}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Perfumes
        </label>
      </div>
      <br />
    </>
  );
}

export default category;
