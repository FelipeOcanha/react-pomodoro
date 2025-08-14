import { Play, HandPalm } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountDownButton} from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";


interface newCycleFormData {
        task: string,
        minutesAmount: number
    }

    

export function Home() {
    const newCycleForm = useForm<newCycleFormData>({
                defaultValues: {
                    task: '',
                    minutesAmount: 0
                },
            })
    const {activeCycle, createNewCycle, interruptCurrentCycle} = useContext(CyclesContext)
    const { handleSubmit, watch} = newCycleForm
  
    const task = watch('task')
    const isSubmitedEnabled  = task
    

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(createNewCycle)} action="">
                
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />

                
                {activeCycle ? (
                    <StopCountDownButton type="button" onClick={interruptCurrentCycle}>
                        <HandPalm size={24} />
                        Interromper
                    </StopCountDownButton>
                ) : (
                    <StartCountdownButton disabled={!isSubmitedEnabled} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )

}