import React from 'react'
import { Header } from '../../components/Header/Header'
import { 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Typography 
} from '@material-ui/core';
import { Container, StyledCard } from './styled';
import { produtos } from '../../constants/utils';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const SellingPage = () => {

  function FilterDescription(desc){
    if(desc?.length < 27){
      return desc;
    }
    return `${desc?.substring(0, 35)}...`
  }

    return (
        <>
        <Header/>  
        <Container>
          <StyledCard sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={produtos.name}
              height="140"
              image={produtos.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>{produtos.name}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>R$ {produtos.price}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {produtos.category} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {FilterDescription(produtos.description)}
              </Typography>
            </CardContent>
            <CardActions >
              <Button size="small" startIcon={<AddShoppingCartIcon />}></Button>
              <Button size="small">Comprar</Button>
            </CardActions>
          </StyledCard>
          <StyledCard sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={produtos.name}
              height="140"
              image={produtos.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>{produtos.name}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>R$ {produtos.price}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {produtos.category} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {FilterDescription(produtos.description)}
              </Typography>
            </CardContent>
            <CardActions >
              <Button size="small" startIcon={<AddShoppingCartIcon />}></Button>
              <Button size="small">Comprar</Button>
            </CardActions>
          </StyledCard>
          <StyledCard sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={produtos.name}
              height="140"
              image={produtos.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <b>{produtos.name}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>R$ {produtos.price}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {produtos.category} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {FilterDescription(produtos.description)}
              </Typography>
            </CardContent>
            <CardActions >
              <Button size="small" startIcon={<AddShoppingCartIcon />}></Button>
              <Button size="small">Comprar</Button>
            </CardActions>
          </StyledCard>
      </Container> 
                </>
    )
}

export default SellingPage