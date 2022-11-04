declare interface IC90SuscripcionWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  //Atributos Panel
  GrupoConfiguracionAvanzada: string;
  // Notificación
  cargando: string;
  noEncontrado: string;
  noDisponible: string;
  noConfigurada: string;
  noCompatible: string;
  enlaceMovil: string;
}

declare module "C90SuscripcionWebPartStrings" {
  const strings: IC90SuscripcionWebPartStrings;
  export = strings;
}
