import * as React from "react";
import styles from "./C90Suscripcion.module.scss";
import {
  IC90SuscripcionProps,
  INotificacionProps,
} from "./IC90SuscripcionProps";
import { useState, useEffect } from "react";
import { sp } from "@pnp/sp";
import { isEmpty } from "lodash";
import * as strings from "C90SuscripcionWebPartStrings";

export default function C90Suscripcion(
  props: IC90SuscripcionProps
): JSX.Element {
  const [noEncontrado, setNoEncontrado] = useState("");
  const [accesoExterno, setAccesoExterno] = useState(false);
  useEffect(() => {
    const datos: () => void = async () => {
      try {
        const red = await sp.site.select("Url,PrimaryUri").get();
        if (red.Url + "/" !== red.PrimaryUri) {
          setAccesoExterno(true);
        }
      } catch (e) {
        console.error(e);
      }
    };
    datos();
  }, []);

  React.useEffect(() => {
    if (isEmpty(props.URL)) {
      setNoEncontrado(strings.noEncontrado);
    }
  }, []);

  if (isEmpty(props.URL)) {
    if (accesoExterno) {
      return (
        <Notificacion Mensaje={strings.noDisponible} Tipo={"alert-secondary"} />
      );
    } else {
      return (
        <Notificacion Mensaje={strings.noConfigurada} Tipo={"alert-warning"} />
      );
    }
  }

  if (isEmpty(props.URL)) {
    return (
      <div className="container ">
        <div className="row pt-2">
          <div className="col-12 text-center bg-light text-black p-3">
            <div className="spinner-border" role="status">
              {isEmpty(noEncontrado) ? (
                <span className="sr-only">{strings.cargando}</span>
              ) : (
                <span className="sr-only">{strings.noEncontrado}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.c90Suscripcion}>
      <div className={styles.container}>
        <a
          href={props.URL}
          target="_blank"
          type="button"
          className={"btn rounded-0 " + styles.buttonSuscripcion}
        >
          Suscribirse
        </a>
      </div>
    </div>
  );
}
function Notificacion(props: INotificacionProps): JSX.Element {
  return (
    <div className="text-center w-100">
      {!isEmpty(props.Mensaje) ? (
        <div className={"alert my-0 " + props.Tipo} role="alert">
          {" "}
          {props.Mensaje}{" "}
        </div>
      ) : (
        <div className={"alert my-0 " + props.Tipo} role="alert">
          {" "}
          {strings.noCompatible}{" "}
        </div>
      )}
    </div>
  );
}
