import React from 'react'
import "./product.css"
import Chart from "../../components/chart/Chart"
import {Link} from "react-router-dom"
import { productData, productRows } from '../../FakeData'
import { Publish } from '@mui/icons-material'
const Product = () => {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="http://product.hstatic.net/1000384805/product/tai_nghe_apple_airpods_2_sac_co_day_1_dce91445de7c4d23a2f5862196f0cb19_grande.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                        <div className="productFormLeft">
                            <label>Product Name</label>
                            <input type="text" placeholder='Apple AirPod' />
                            <label>In Stock</label>
                            <select name='inStock' id="inStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <label>Active</label>
                            <select name='active' id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src="http://product.hstatic.net/1000384805/product/tai_nghe_apple_airpods_2_sac_co_day_1_dce91445de7c4d23a2f5862196f0cb19_grande.jpg" alt="" className="productUploadImg" />
                                <label for="file">
                                    <Publish/>
                                </label>
                                <input type="file" id="file" hidden/>
                            </div>
                            <button className="productButton">Update</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Product
