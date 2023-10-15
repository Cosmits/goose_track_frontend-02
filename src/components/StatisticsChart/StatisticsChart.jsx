import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend , Bar} from 'recharts';
const data = [
    {
      "name": "To DO",
      "uv": 40,
      "pv": 20
    },
    {
      "name": "In Progress",
      "uv": 30,
      "pv": 15
    },
    {
      "name": "Done",
      "uv": 20,
      "pv": 98
    },
   
  ]

  const CustomBarShape = (props) => {
    const { x, y, width, height, fill, radius ,  colorStart, colorEnd} = props;
    
  
    return (
      <path d={`M${x},${y + radius} L${x},${y + height - radius} Q${x},${y + height} ${x + radius},${y + height} L${x + width - radius},${y + height} Q${x + width},${y + height} ${x + width},${y + height - radius} L${x + width},${y + radius} Q${x + width},${y} ${x + width - radius},${y} L${x + radius},${y} Q${x},${y} ${x},${y + radius}`} fill={fill} />
    );
  };

export const StatisticsChart = ({tasks})=>{


    return (
        <div style={{ border: '2px solid var(--light-blue)', padding: '48px', borderRadius: '20px', 
        width: '860px', backgroundColor: "var(--pink-gradient)"}}>
        {/* {tasks.map(task =><div>{task.category}</div>)} */}
        <BarChart
           width={780}
          height={286}
          data={data}
          margin={{top: 10,   left: 30}}
          barCategoryGap='160'
          barGap ={14}
        >
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis dataKey="name" 
          axisLine={false}
          tickLine={false}
          />
          <YAxis  
          label={{value: 'Tasks', position: 'top' 
        
        }}
          width = {1}
        //    orientation = 'right' 
           domain={[0, 100]}
            tickCount={6} 
            padding={{ top: 0, bottom: 10, left: 20 }}
           axisLine={false}
           tickLine={false}
           />
          <Tooltip />
          <Legend align ='right' verticalAlign="top" height={48}/>
          <Bar dataKey="pv"    barSize={27} 
          fill="pink"
          shape={<CustomBarShape radius={8} />}
          label={{ position: 'top' }}
        //   label={{ fill: 'red', fontSize: 20 }}
        //   background={{ fill: '#eee' }}
          />
  <Bar dataKey="uv" fill="var(--low-color)"  
  barSize={27}
  shape={<CustomBarShape radius={8} />}
   label={{ position: 'top' }}

  />
        </BarChart>
     
</div>
    )
}