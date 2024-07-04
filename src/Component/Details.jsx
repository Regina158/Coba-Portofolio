import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
    return (
        <div>
            <div className="self-start ml-4 mt-4">
                <Link to="/article" className="btn btn-primary">Back to Articles</Link>
            </div>

            <div className="flex flex-col items-center justify-center ">
                <div className="my-10">
                    <img src="src/assets/q.png" alt="Droid Game" className="w-80 h-auto border border-gray-300" />
                </div>
                <div className="my-10 mx-28 text-justify">
                <p >Project yangdikerjakan ini adalah berupa permainan game hide and seek, dimana ada yang bertugas mencari dan ada yang bertugas untuk menghindar.Permainan ini terdiri atas 2 player yang dimana terdiri atas droid pencari (warna merah) dan droid penghindar (warna hijau). Project ini adalah menyusun algoritma untuk menggerakkan droid merah dan droid hijau dengan menggunakan Bahasa pemprograman yang bebas dan algoritma yang dikuasai.
                </p>
                <p>Droid merah akan bergerak mencari dan mengejar droid hijau. Droid hijau berusaha menghindar dari droid merah. Peta terdiri dari jalan dan tembok. Jalan merupakan lintasan yang dapat dilalui droid merah dan droid Hijau, sememtara tembok tidak dapat di lintasi. Luas peta adalah 50 cell x 50 cell. Posisi droid merah dan droid hijau bisa di acak. Dan peta juga bisa diacak.
                </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center ">
                <div className="my-10">
                    
                </div>
            </div>
        </div>
    );
}

export default Details;
