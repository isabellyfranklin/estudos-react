import type { coffeProps } from "../interface/coffe";

export function Coffee({imageSrc, coffe, imageSize = 200,imageHeight}: coffeProps){
  return(
      <>
            <img
                src={imageSrc}
                alt={coffe.name}
                width={imageSize}
                height={imageHeight}
                className='recipe-imagem'
            />
            <h2 className='recipe-title'>{coffe.name}</h2>
            <p className='recipe-description'>{coffe.description}</p>
            <p><b>Tempo de preparo: </b>{coffe.time} min </p>
        </>
  )
}