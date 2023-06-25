import Button from '../button/Button'

export default function Content(){
    return(
        <section className='card-content'>
            <article className='card-apresentation'>
                <h1>Mr. Buanda</h1>
                <p>Software Enginneer</p>
                <p>mrbuanda.com</p>
            </article>
            <Button/>
            <article className='card-about'>
                <h3>About</h3>
                <p>
                    
                    I am a software engineer with a specialization in frontend 
                    development. I have a strong passion for simplifying processes 
                    and automating daily tasks. I am dedicated to staying updated on 
                ...
                </p>
            </article>
            <article className='card-interest'>
                <h3>interest</h3>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. 
                    Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. 
                    Coffee fanatic.
                </p>
            </article>
        </section>
    )
}