import React from 'react'

const KategoriComp = ({addclass,fontsize,col,namacate,gambarcate,heightimg}) => {
  return (
    <>
        <div className={"col-md-4 mb-4 " + col}>
          <div className="card text-light border-0">
            {/* {img.map((res)=>(console.log(res)))} */}

            <img
              src={gambarcate}
              alt=""
              className={'img-fluid ' + addclass}
              style={{ height: heightimg }}
            />
            <div className="card-img-overlay d-flex align-items-center px-0">
              <h4 className={"text-light text-center flex-fill fw-bold p-2 card-title title-cate "+ fontsize}>
                {namacate}
              </h4>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default KategoriComp