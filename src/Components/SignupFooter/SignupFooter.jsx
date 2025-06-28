import Button from '../Button/Button'
import style from './SignupFooter.module.css'

function SignupFooter() {
    return (
        <div className={style.signup}>
            <div className={style.content}>
                <p>Testar o Premium de graça</p>
                <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <div className={style.btn}>
                <Button size={'big'}>
                    Inscreva-se grátis
                </Button>
            </div>
        </div>
    )
}

export default SignupFooter