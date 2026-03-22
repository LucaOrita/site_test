/* eslint-disable simple-import-sort/imports */
declare module 'react-simple-maps' {
  import type { CSSProperties, ComponentType, ReactNode } from 'react';

  interface ProjectionConfig {
    rotate?: [number, number, number];
    center?: [number, number];
    scale?: number;
    parallels?: [number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    viewBox?: string;
    children?: ReactNode;
  }

  interface ZoomableGroupProps {
    zoom?: number;
    center?: [number, number];
    minZoom?: number;
    maxZoom?: number;
    children?: ReactNode;
  }

  interface GeographiesChildrenProps {
    geographies: GeographyType[];
  }

  interface GeographiesProps {
    geography: string | object;
    children: (data: GeographiesChildrenProps) => ReactNode;
  }

  interface GeographyType {
    rsmKey: string;
    id: string;
    properties: Record<string, unknown>;
    type: string;
    geometry: object;
  }

  interface GeographyStyleState {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
    cursor?: string;
  }

  interface GeographyProps {
    geography: GeographyType;
    onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement>) => void;
    style?: {
      default?: GeographyStyleState;
      hover?: GeographyStyleState;
      pressed?: GeographyStyleState;
    };
    className?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
}
