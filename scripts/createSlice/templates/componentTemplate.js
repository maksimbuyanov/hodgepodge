const interfaceConst = "interface"

module.exports = componentName => `import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import cls from "./${componentName}.module.scss"
import { memo } from "react"

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = (props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>

        </div>
    );
};
export default memo(${componentName})
`
