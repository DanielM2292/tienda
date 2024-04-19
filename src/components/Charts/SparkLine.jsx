import React from 'react'
import { SparkLineComponent, Inject, SparkLineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparkLineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${yval}',
        TrackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparkLineTooltip]} />
    </SparkLineComponent>
  )
}

export default SparkLine
