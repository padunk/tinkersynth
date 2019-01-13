// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS, CONTROL_RADIUS } from '../../constants';

import BezierCurve from '../BezierCurve';

import type { Curve } from '../../types';

type Props = {
  curve: Curve,
  updateCurve: (curve: Curve) => void,
  width: number,
  height: number,
  isAnimated: boolean,
};

const BezierControl = ({
  curve,
  updateCurve,
  width,
  height,
  isAnimated,
}: Props) => {
  const isCubic = !!curve.controlPoint2;

  return (
    <Wrapper style={{ width, height }}>
      <BezierCurve
        width={width}
        height={height}
        isAnimated={isAnimated}
        points={
          isCubic
            ? [
                curve.startPoint,
                curve.controlPoint1,
                curve.controlPoint2,
                curve.endPoint,
              ]
            : [curve.startPoint, curve.controlPoint1, curve.endPoint]
        }
        updatePoint={(id, point) => {
          // The BezierCurve returns a point based on ID, and the coordinates
          // assume a top/left origin.
          // Our curves are named differently, and are based from the
          // bottom-left corner.
          //
          // TODO: It would be much nicer to just update the BezierCurve
          // component to match this project.
          let name;

          switch (id) {
            case 'p1':
              name = 'startPoint';
              break;

            case 'p2':
              name = 'controlPoint1';
              break;

            case 'p3':
              name = isCubic ? 'controlPoint2' : 'endPoint';
              break;

            case 'p4':
              name = 'endPoint';
              break;

            default:
              throw new Error('unsupported ID: ' + id);
          }

          updateCurve({ ...curve, [name]: point });
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background: ${COLORS.gray[900]};
  border-radius: ${CONTROL_RADIUS}px;
`;

// $FlowIgnore
export default React.memo(BezierControl);
