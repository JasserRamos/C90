import * as React from "react";
import * as ReactDom from "react-dom";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-webpart-base";
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as strings from "C90SuscripcionWebPartStrings";
import C90Suscripcion from "./components/C90Suscripcion";
import { IC90SuscripcionProps } from "./components/IC90SuscripcionProps";
import { PropertyPanePropertyEditor } from "@pnp/spfx-property-controls/lib/PropertyPanePropertyEditor";
export interface IC90SuscripcionWebPartProps {
  URL: string;
}

export default class C90SuscripcionWebPart extends BaseClientSideWebPart<IC90SuscripcionWebPartProps> {
  public constructor() {
    super();
    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    );
    SPComponentLoader.loadCss(
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    );
    SPComponentLoader.loadScript(
      "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      { globalExportsName: "jQuery" }
    ).then((): void => {
      SPComponentLoader.loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js",
        { globalExportsName: "bootstrap" }
      );
    });
  }
  public render(): void {
    const element: React.ReactElement<IC90SuscripcionProps> =
      React.createElement(C90Suscripcion, {
        URL: this.properties.URL,
      });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("URL", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
            {
              groupName: strings.GrupoConfiguracionAvanzada,
              groupFields: [
                PropertyPanePropertyEditor({
                  webpart: this,
                  key: "propertyEditor",
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
