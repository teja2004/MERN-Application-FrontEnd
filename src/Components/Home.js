import Notes from './Notes';

export default function Home(props) {

   
  return (
    <> 
    
    <Notes styleType={props.toggleMode} toggleType={props.toggleType}/>
    
    </>
  )
}
