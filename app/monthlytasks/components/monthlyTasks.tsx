'use client';
import Timeline from '@/monthlytasks/components/timeline';
import MainLayout from '@/_layout/components/mainLayout';
import DownList from '@/_components/monthly.downlist';
import '@/monthlytasks/styles/index.scss';
import { useMonthlyTasksState } from '@/monthlytasks/hooks/index';

export default function MonthlyTasks() {

    const {
        setSelectedMonth,
        MONTHS_DICT,
        selectedMonth,
        monthlyTasks } = useMonthlyTasksState();


    const chooseMonth = (
        <>
            <span className='monthlyTask__label'>請選擇月份</span>
            <div className="monthlyTask__dropDown-container">
                <DownList
                    className="monthlyTask__monthlyDownList"
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                    monthsDict={MONTHS_DICT}
                />
            </div>
        </>
    )

    const tasks = (
        <>
            {monthlyTasks.length === 0 ? (
                <div>無工作事項</div>
            ) : (
                monthlyTasks.map((task, index) => (
                    <div key={index} className="monthlyTask__task">
                        {/* 渲染任務的詳細信息 */}
                        <span>{task.dueDate ? task.dueDate : '無日期'}</span> {/* 格式化日期 */}
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                    </div>
                ))
            )}
        </>
    )


    return (
        <MainLayout>
            <div className="monthlyTask__container">
                {chooseMonth}
            </div>

            <div className="monthlyTask__tasks-container">
                {tasks}
            </div>
        </MainLayout>
    );
}
