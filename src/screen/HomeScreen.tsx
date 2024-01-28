import React, { useState } from "react";
import suzuki from "../assets/suzuki.png";
import hyundai from "../assets/hyundai.jpeg";
import renault from "../assets/renault.jpeg";
import honda from "../assets/honda.webp";
import tata from "../assets/tata.png";
import ford from "../assets/ford.jpeg";
import volks from "../assets/volks.png";
import mahindra from "../assets/mahindra.jpeg";
import toyoto from "../assets/toyoto.jpeg";
import bmw from "../assets/bmw.jpeg";
import benz from "../assets/benz.png";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { addVehicle } from "../reduxToolkit/reducers/VehicleListSlice";
import { useNavigate } from "react-router-dom";

interface Brand {
  img: string;
  brandName: string;
}

const brandNames: Brand[] = [
  {
    img: suzuki,
    brandName: "Maruti Suzuki",
  },
  {
    img: hyundai,
    brandName: "Hyundai",
  },
  {
    img: renault,
    brandName: "Renault",
  },
  {
    img: honda,
    brandName: "Honda",
  },
  {
    img: tata,
    brandName: "Tata",
  },
  {
    img: ford,
    brandName: "Ford",
  },
  {
    img: volks,
    brandName: "Volkswagen",
  },
  {
    img: mahindra,
    brandName: "Mahindra",
  },
  {
    img: toyoto,
    brandName: "Toyota",
  },
  {
    img: bmw,
    brandName: "BMW",
  },
  {
    img: benz,
    brandName: "Mercedes-Benz",
  },
];

const HomeScreen: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const [form, setForm] = useState<any>({});
  const [model, setModel] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedImage) {
      return alert("Image is required.");
    }

    dispatch(addVehicle({ ...form, brandName: model }));
    setForm({});
    setIsShow(!isShow);
    setSelectedImage("");
    alert("Vehicle details has added.");
    navigate("/allVehicle");
  };

  const handleOnClick = (name: string) => {
    setIsShow(!isShow);
    setModel(name);
  };

  return (
    <>
      <div className="max-w-screen-xl px-4 py-3 mx-auto bg-gray-200 my-10 rounded-md">
        <div className="grid grid-cols-5 gap-10 p-5">
          {brandNames.map((item, i) => (
            <div
              key={i}
              className="shadow-md text-center rounded-md p-4 cursor-pointer hover:scale-105 bg-white"
              onClick={() => handleOnClick(item.brandName)}
            >
              <div className="flex justify-center items-center">
                <img
                  className="object-cover rounded-md w-32 h-28 border"
                  src={item.img}
                  alt={item.brandName}
                />
              </div>
              <p className="text-gray-500 font-medium text-lg">
                {item.brandName}
              </p>
            </div>
          ))}

          <Modal
            isShow={isShow}
            setIsShow={setIsShow}
            handleChange={handleChange}
            form={form}
            model={model}
            selectedImage={selectedImage}
            handleChangeImg={handleChangeImg}
            setSelectedImage={setSelectedImage}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
