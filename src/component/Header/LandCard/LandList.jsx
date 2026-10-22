import React, { useEffect, useState } from "react";
import styles from "./LandCard.module.css";
import { useNavigate } from "react-router-dom";
import { getLands } from "./data/landsStorage";


const LandList = () => {
  const navigate = useNavigate();
  const [lands, setLands] = useState([]);

  useEffect(() => {
    setLands(getLands());
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <p className="description-text">
        <img
          src="/lands/icon.png"
          alt=""
          style={{ width: 20, height: 20, margin: "auto 4px" }}
        />

        <em>This website gives you lands for investment in agricultural way. Here you see some of our lands.</em>

        <img
          src="/lands/icon.png"
          alt=""
          style={{
            width: 20,
            height: 20,
            margin: "auto 6px",
          }}
        />
      </p>

      <h2>Lands in Syria</h2>

      <div className={styles.fullcontainer}>
        {lands.length === 0 ? (
          <p>No lands available.</p>
        ) : (
          lands.map((land) => (
            <div key={land.id} className={styles.card}>
              <img
                src={land.landMedia?.[2] || "../../../../public/lands/p1.jpg"}
                alt="Agricultural land"
                className={styles.image}
              />

              <div className={styles.content}>
                <span style={{ display: "flex" }}>
                  <img
                    src="/lands/dollers.png"
                    alt=""
                    style={{ width: 20, height: 20 }}
                  />
                  <p>{land.price}</p>
                </span>

                <span style={{ display: "flex" }}>
                  <img
                    src="/lands/house.jpg"
                    alt=""
                    style={{ width: 20, height: 20, marginRight: 4 }}
                  />
                  <p>{land.area} Dunams</p>
                </span>

                <span style={{ display: "flex" }}>
                  <img
                    src="/lands/Land location.jpg"
                    alt=""
                    style={{ width: 20, height: 20, marginRight: 4 }}
                  />
                  <p>{land.city}</p>
                </span>

                <p className={styles.desc}>{land.description}</p>

                <div className={styles.footer}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: 17,
                    }}
                  >
                    <img
                      src="/lands/profile-circle.png"
                      alt=""
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 4,
                      }}
                    />

                    <span style={{ fontWeight: 600 }}>
                      {land.firstName} {land.lastName}
                    </span>
                  </div>

                  <button
                    style={{ padding: "5px 20px", marginRight: 40 }}
                    onClick={() =>
                      navigate(`/landdetailspage/${land.id}`)
                    }
                  >Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LandList;