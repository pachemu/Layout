import styles from './Form.module.scss'
import Map from '@/shared/assets/theForm/map.svg'
import Background from '@/shared/assets/theForm/Background.svg'
import Button from "@/shared/ui/Button/ui/Button";
import Emoji from '@/shared/assets/theForm/Emoji.svg'
import Shines from '@/shared/assets/theForm/Shines.svg'

const Form = () => {
    return (
        <section className={styles.Form}>
            <Background className={styles.Form_background}/>
            <div>
                <div className={styles.Form_containerBack}>
                    <h1 className={styles.Form_containerBack_title}>Fill up the form and we'll get in touch within a few hours</h1>
                    <Map className={styles.Form_containerBack_background}/>
                    <Shines className={styles.Form_containerBack_shines}/>
                </div>
                <div className={styles.Form_form}>
                    <div className={styles.Form_form_title}>
                        Hi, we're <span className={styles.Form_form_title_nameCompany}>Tinvio!</span> And you?
                    </div>
                    <div className={styles.Form_form_main}>
                        <div className={styles.Form_form_main_group_input}>
                            <label className={styles.Form_form_main_group_label}>Name</label>
                            <input placeholder={'John Appleseed'}
                                   className={` ${styles.input}`}/>
                        </div>
                        <div className={styles.Form_form_main_group_input}>
                            <label className={styles.Form_form_main_group_label}>Business Name</label>
                            <input placeholder={'Burgers &Boba (Singapore)'}
                                   className={` ${styles.input}`}/>
                        </div>
                        <div className={styles.Form_form_main_group_input}>
                            <label className={styles.Form_form_main_group_label}>Phone</label>
                            <input placeholder={'65 9123 4567'} className={` ${styles.input}`}/>
                        </div>
                        <div className={styles.Form_form_main_button}>
                            <Button style={{width: '210px'}} type={'red'}>Submit</Button>
                        </div>
                        <div className={styles.Form_form_main_terms}>
                            No spam, promise <Emoji/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form