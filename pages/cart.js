import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.background}>
      <NavBar></NavBar>
      <div className={styles.cart}>
        {/* Regalo Recomendados */}
        <div className={styles.leftSection}>
          <h1>Regalos Recomendados</h1>
          <div className="photo-cascade">
            <div>
              <img
                // src="https://previews.123rf.com/images/beo88/beo881711/beo88171100002/89436401-ropa-femenina-de-oto%C3%B1o-su%C3%A9ter-rosa-jeans-bolso-de-cuero-bufanda-estampada-accesorios-y.jpg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfwhgzbnkSYLyRWTVsKfLHPanbAS85JQ-ag&usqp=CAU"
                alt="Imagen 1"
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfwhgzbnkSYLyRWTVsKfLHPanbAS85JQ-ag&usqp=CAU"
                // src="https://static-cse.canva.com/blob/984345/05Secretosfotosdeproducto.jpg"
                alt="Imagen 2"
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfwhgzbnkSYLyRWTVsKfLHPanbAS85JQ-ag&usqp=CAU"
                alt="Imagen 3"
              />
            </div>
          </div>
        </div>

        {/* Carrito de compras */}
        <div className={styles.rightSection} id={styles.cart}>
          <h1>Carrito de Compras</h1>
          <div className={styles.cartItem}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHkS1q8sBIuNYM_3dGtETztbjnLAmQ0prkrC-nIcPCrkpdbKRo4RDGgJpA7VEHOqU2LY&usqp=CAU"
              alt="Producto 1"
            />
            <div className={styles.itemDetails}>
              <h2>Producto 1</h2>
              <p>Precio: $200</p>
              <Link href={"/cart2"}>
                <button className={styles.removeButton}>Eliminar</button>
              </Link>
            </div>
            <button className={styles.addButton}>+</button>
          </div>

          <div className={styles.cartItem}>
            <img
              src="https://smoda.elpais.com/wp-content/uploads/images/201449/el_diccionario_definitivo_de_los_bolsos__712030114.jpg"
              alt="Producto 2"
            />
            <div className={styles.itemDetails}>
              <h2>Producto 2</h2>
              <p>Precio: $150</p>
              <button className={styles.removeButton}>Eliminar</button>
            </div>
            <button className={styles.addButton}>+</button>
          </div>

          <div className={styles.cartItem}>
            <img
              src="https://cdn0.matrimonio.com.co/vendor/5609/3_2/960/jpg/img-20200217-213334-125_10_125609-158501247571472.jpeg"
              alt="Producto 3"
            />
            <div className={styles.itemDetails}>
              <h2>Producto 3</h2>
              <p>Precio: $80</p>
              <button className={styles.removeButton}>Eliminar</button>
            </div>
            <button className={styles.addButton}>+</button>
          </div>

          <div className={styles.total}>
            <h3>Total: $430</h3>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
}
