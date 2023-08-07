import React, {useState} from 'react';
import styles from './Main.module.scss'
import CustomButton from "../../components/customButton/CustomButton";
import {useSnackbar} from "notistack";
import {yandexAPI} from "../../api/yandexAPI/yandexAPI";

type TMainProps = {}

const Main: React.FC<TMainProps> = ({}) => {

    const [countFiles, setCountFiles]=useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const {enqueueSnackbar} = useSnackbar();
    const [files, setFiles] = useState<File[]>([]);

    const handleAddFile=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const count = event.target.files?.length ?? 0;
        setCountFiles(count);
        if(count > 0 && count <= 100){
            setIsActive(true)
        }
        if(count>100){enqueueSnackbar("Количество файлов не должно превышать 100", {variant: "warning"})}

        if(!event.target.files)return
        setFiles(Array.from(event.target.files));
    }

    const handleSend  = async() => {
      for(let i = 0; i < files.length; i++)
      {
        const {data} = await yandexAPI.uploadFile(encodeURI(files[i].name))
        await yandexAPI.sendFile(String(data.href), files[i])
      }
    }

    return (
        <div className={styles.main}>
            <label htmlFor={"files"} className={styles.input}>{countFiles===0?`Выберите файлы`:`Выбрано файлов: ${countFiles}`}</label>
            <input type={"file"}  multiple onChange={handleAddFile} id="files" className={styles.inputDef}/>
            <div className={styles.buttons}>
                {<CustomButton buttonName={"Отправить"} disabled={!isActive} onClick={handleSend}/>}
            </div>
        </div>
    );
};

export default Main;