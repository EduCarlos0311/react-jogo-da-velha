import styles from "./Header.module.css"
import Title from "../title/Title"
import SubTitle from "../subTitle/SubTitle"
import Icon from "../icon/Icon"

function Header () {
    return (
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <SubTitle>Desenvolvido por Carlos Eduardo</SubTitle>
            <div className={styles.iconContent}>
                <Icon iconName="github" size="40px" link="https://github.com/EduCarlos0311/"/>
            </div>
        </div>
    )
}

export default Header

