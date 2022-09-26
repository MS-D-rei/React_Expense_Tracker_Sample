import { ReactNode } from 'react';
import '@/components/UI/Card.css'

function Card(props: { className: string, children: ReactNode}) {
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;