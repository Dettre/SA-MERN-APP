import { useLocation } from "react-router-dom";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updatePrd } from "../../redux/apiCalls";
import styled from "styled-components";


const Duo = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid teal;
  border-radius: 10px;
  padding: 3% 3%;
  margin-bottom: 5%;
`;

const Button = styled.button`
  background: transparent;
  outline: 0;
  border: none;
  color: teal;
  width: 100%;
  text-align: right;
  cursor: pointer;
  font-size: 16px;
`;

const Input = styled.input `
border: none;
outline: 0;
width: 100%;
`;

export default function Product() {

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const produc = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const dispatch = useDispatch()
  const prdname = produc.title;
  const prddesc = produc.desc;
  const prdprice = produc.price;
  const prdcategory = produc.categories;
  const prdcolor = produc.color;
  const prdsize = produc.size;
  
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [status, setStatus] = useState('');

  const handleClick = (type) => {
    if (type === "name") {
      updatePrd(dispatch,  productId, type, name );
    } else if (type === "desc") {
      updatePrd(dispatch,  productId, type, prdname, desc  );
    } else if (type === "price") {
      updatePrd(dispatch,  productId, type, prdname, prddesc, price );
    } else if (type === "category") {
      updatePrd(dispatch,  productId, type, prdname, prddesc, prdprice, category );
    } else if (type === "color") {
      updatePrd(dispatch,  productId, type, prdname, prddesc, prdprice, prdcategory, color );
    } else if (type === "size") {
      updatePrd(dispatch,  productId, type, prdname, prddesc, prdprice, prdcategory, prdcolor, size );
    } else if (type === "status") {
      updatePrd(dispatch,  productId, type, prdname, prddesc, prdprice, prdcategory, prdcolor, prdsize, status );
    }
};
const handleChange = (e) => {
  setStatus((prev) => {
    return { ...prev, [e.target.name]: e.target.value };
  });
};

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product Details</h1>
      </div>
      <div className="productBottom">
        <div className="productForm">
          <div className="productFormLeft">
            <div className="productUpload">
              <img src={produc.img} alt="" className="productUploadImg" />
            </div>  
            <Duo>
            <Input type="text" placeholder={produc.title} name="title" type="text" onChange={(e) => setName(e.target.value)}/>
            <Button onClick={() => handleClick("name")} >Change Name</Button>
            </Duo>
            <Duo>
            <Input type="text" placeholder={produc.desc} name="desc" type="text" onChange={(e) => setDesc(e.target.value)}/>
            <Button onClick={() => handleClick("desc")}>Change Description</Button>
            </Duo>
            <Duo>
            <Input type="text" placeholder={produc.price} name="price" type="number" onChange={(e) => setPrice(e.target.value)} />
            <Button onClick={() => handleClick("price")}>Change Price</Button>
            </Duo>
            <Duo>
            <Input type="text" placeholder={produc.categories} type="text" onChange={(e) => setCategory(e.target.value)}/>
            <Button onClick={() => handleClick("category")}>Change Category</Button>
            </Duo>
            <Duo>
            <Input type="text" placeholder={produc.color} type="text"  onChange={(e) => setColor(e.target.value)} />
            <Button onClick={() => handleClick("color")}>Change Color</Button>
            </Duo>
            <Duo>
            <Input type="text" placeholder={produc.size} type="text" onChange={(e) => setSize(e.target.value)} />
            <Button onClick={() => handleClick("size")}>Change Size</Button>
            </Duo>
            <Duo>
            <select name="inStock" id="idStock" style={{border:"transparent", width:"100%", outline:"none", color:"gray", fontSize:"16px"}}  onChange={handleChange} >
              <option selected disabled>Pick Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <Button onClick={() => handleClick("status")} >Change Status</Button>
            </Duo>
          </div>
        </div>
      </div>
    </div>
  );
}
