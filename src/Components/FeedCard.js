import React from 'react'

import OutHeart from '../Assets/outline-heart.svg'
import FillHeart from '../Assets/filled-heart.svg'

function FeedCard() {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRYYGRgaGhoaGhocGhoeGhocGBoaGhgaGhocIS4lHCErIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjEhJCExNDQxMTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQxNDQxNDQ/ND8xPzQ0NDE0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAMEBQYCB//EAD0QAAIBAgMFBgQDBwMFAQAAAAABAgMRBAUhBhIxQVEiMmFxkbETgaHRcsHwM0JSYoLh8RQjoiQ0Q2OyFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACARAQEBAQACAgMBAQAAAAAAAAABAhEhMQMSIjJBE1H/2gAMAwEAAhEDEQA/ANO0BsLYmZLctHJ0CwALiYbdQMASExMCAExCBcDJoDE2C6AECQlJCchA20Cx0zlIAJy0dHLQG5sA6kCwAGGmrtCsGGjFTzPKXKvCnrJpeZFee0292Cc3/LqvXkM1MoVZ3q9pLhHhH5rmWMMDGEVGMYpLklb2M3dzMV88zqL/AMV1+LU7jnNu/SmvJJ+xMeGTfI7lhkLyL9UfD5jTnwun0aaJcZIjywaOv9M+TEm8/iTvIRH+DLqIC4eZzILAzocLliDoAAQmIVgDkAZDdSokm2+AAd4j4nGQh3pJeZl872ns3Gny/e+xlMZmE5tynJsFTLd4jaajG9pXIctrafK/oYWVW43IODjaVdr9NIu9+L+xEe1k/wBcDKSmznfDgb7AbXQk7VFu/wA3L5mkw2JhNb0JJrwdzx9SJmAzOdKe9CVvB91+aDgetsBS5Dn8MQt3uzXGN+P4epcoQcsFgsDYgLFT4gTE2BxxmedwoRV9W+C6mbxO2lV33IRXndljneWTrqG5bRu7fiQ8NsXLjOenSK/MU+s9t7da9eFXHa7Exlvb0X4OKsXmR7YTq1I05wV3+9F6K3gSaGyuHTs4N+ZcYXJqVPuQUfJCus88RUzqe6sITurhcrAhTsjib6kqLfEC4hAGCTCwNG7hKwrCQmACwAikANTdjIbUZu7ulB8u0/yL7PceqVNv956R8zzao5Tl1u9X5iq856Y+He8nwXDxI0mmyyxVOySVyu+H1CVWpwtDibO2uQ1OBSXMjhilc5kMh3zqMxtCUgLqTQrSjJSi2mtU1xTR6Jsxn6rx3JtKov8AkuqPNL8x/D4iUJKcHaUXdMVivb2Q5K/Is0jXpKa0ktJLo0WJJAFAFcQSquLpQjeUkl4lTX2torhGUvJaFTtXwh5y/IzNw+srT/Wycka2ptml3KXrL7I4W3bXeoek/ujKyA0P6xP+unq2VZpDEQ34PzT4pkpo8xyTNJYee8tYvSUeq+56TgcVCrBThJNP6Po/Ez1njbOvtDm6hHQhK6ZZydM5NnGR0BCuBUATkEYxkrQb8AOMXtFiHUqqC5ckLDZTZXsDKqW/XnNryNVGgrGeq7vjzJGellKlyKXNcklDtQ1XNHoMKCOKuGTRM1YrWZXmVHDxmvEYxOWTjqtUaLO8udKfxILs/vIkYJxmlfnr9yvtxlcT1WGnBjMkbnNcjjNXgrMx2Kw0oS3ZIvOpWOsXKK0CUTtoRbPjiJ1FnNrCQGvdmMz+DWV+5Oyf5M9OUk7NcDxiL6HpGyuY/EpKLesdPOxOoa/EJBZJM3tXwh/V+RmjS7VLuf1eyM3YuJoKIhCAEWuSZxPDydtYS70fzT6lWC4WdOXjc/8A66l/DL6CMJvCJ+sX/pXrkkKwmwtDZgjk6QGhlSRAzeVqc2v4X7E9ors8lajN+H5iPPtTbPU9H5v3t+RooQMjgs7hSajK7u221yvJmpwONhUV4ST9zHXt34vhMjAbqxsPb1kZfO8VWm9yn2Yvi1x9eQGk5lOm04zlHVczHYCsoVHBO6Tdn1RY0dmt5uVSpLXktfqyuzfJ40nCUJNpu1315Dkib1raMd5FPm+UKfFX462JOTVJ7qvquv8AYuL3JnhVnXl+Ny6UG7pkKx6XmeAU4vTUw2Lw1m0a513259/Hz0ppu0hIZrxtJof42fU2YT27iXuzOP8AhztyfoUKH6c2pJrqTVvXoTukxwpsgxu/BeRctmZKDafhDzl7Ixs8VLf8Lmy2m4Q85exj5OG/wLyjR5z8joiVKcnLREqMRgQSCAQCwjr5IQB6y+IUCQUIAIRyMEVu0Lthqj6RLJEHO4b1Cqv5JewDPtmaWFowoQqVFFqUVJtq+pGwmdYenNbiklda2dvRk7HZXv4ai3LSMINrroiqzrLY1WnTtG6indWs49CLmf11Z1r+RvqOIjOCnFpxaunyaZTY7ERipNLhrpzG8ujKlQhSvfdVr+PFkPFUXPstu17u3My8db+eKzEvFypurpGHJLjZ8G+SKGNbETUrtyjGzalZ26NG7oRmoOGjg1Zp2fy1IKyeMU7K1+JfYyudW+1fs9iJzVt5RjHlbV/Y00JmWwC3K0oPr9OKNPh43IrXMO2ujE57QtJ6G/pQ8DP59hU3fkGbylvPY89q4RzkrcyRjqCSVraKxbSw27qlxIeIinB3Sujaa6w+kkqoQ4+ALDu72X5FM5Gi2Uxtpbrf+OZvISueUZbW3Jxlw6nqGBq70E/BE0aiHnuFc4Xiryi72XTmYmeG7V2mvC1vc9KscSgnxSfoEvEWdYmji4xpzhuJ7371tV5ETePQHTXReiG6kF0Xog6OMDdCcrG3nTj0XohuUF0XoPpMXviNl8OPReiEHQ1AhMLGQAYbiAgQxjY3hNdYyXqh4E43TT5gc9qfD9vDUujpw+iRy4RXJHOVTbw0V/A5wt+CbQ+qF14mWq7vgn41DnNHVKKbHZ4N8EQ3TnCSfiZtatlTtyOpU7ofpq6ucziAjF5/DcrxmuaV/wCl/Y0WE7qfJq5UbW0f9tS6P6PR+5Y5JO9KHkP+CLROyKnNoXi2WrRBxqutRBl8xahTbtdvRLzKeEZSTUlbRs07a10vYrc1qQUd+z+XD5o0zf4y1GU5j9KPFHCd7+vqPUlqaVhwzFG+2VxO9TSfFaGEcTS7IVbTlHrb3EVnhtgMJyxIG41McY1IAZkcNnczhjSF2IH65iANM2BCYikhcAWGwByxMQpMAosOt114LlUcl/XGM/uTaUrxTXNDE1atPpKEW/8AkhvLa3YlF8YNrxtrYz1HZ8Gv4cxcJPVNrThfQiRU52Unov1xKrE7Uq9owenVjuBz2E3afYb68H8yLmu2/FqTvGow09Eh2cSLhpJpNNPyJUZEslBtTBfAn5DezGtGN/1qSNp/2M14EfZdf7Mbj/hrqxAx8uy2T5Mps8xG7B9RprI4/Np05ycLNNWs+ZCzTN5xnKCUHG0WtOF4pteK1ZDzWb3rdHcgO7d3zNs5jl3q28WGHXZO6fEaw/AdixX2c9DNlts9UtUT66exUVeZOymdpRfRoVFj0mD0CN0hwGIWOJHVziQAzIbY7IbkNNcXAKwgDTMQpARSQECctOuq/wAhuAGwGg3OGBq7E/toeMJr0cbFJOt8LE692pZevX0LvFR/3qT/ABr/AI3/ACKLaujxkuVn9SbGuLzUZ3PcNKnXluu2u8tLrXzI9bGTnHdlJv5JeyL7BU4Y2mm241YdiT436Nrx6kzCbOU4SUptz8OCF9pJ5exneLmW+zOyeEqRW/KclF92L4W66mujNNDEUrWS0Oosxt7XNu/a9Qc7p3pz/C/YayKmo0YfhXsP5pPsT/C/YjYCso0ofhXsA/idXrJK5k80xG+30XAn47FOei0RVYtWQ4z1WSzDvMjqJJxes2NuOp0T05bPJ+m/YcpLVjUFxHaHXxJq4NQkYGVhhPtfMmOluycfJk03oOBqb0IvqkSWUWzeJThuN6ou3IcY6nKLY3IJzJgRuTG5HTOJMZOPQJxcQBpxBbFcpASBcLYAAMbqTsdykVeY4rdWqdn0C08564x2NgqlJt2tKV/Jwl/YqNp8xpyg1GSbtZ2+Rm87xfavGUrrrxKaFaUneTv5k+28zyxabNY/4WJi27RneMungz02Op4xOWvyLnAbXV6cVB2mkrJy4rwvzJ1i1tncnivTWrDVSqlzMFLbSo13I3839izyfNZVtZWv0Rnc2NJrN9LLN8TanNr+FjGHg3CP4V7Heb/sZeNl6sl0YdiPkhKQpUipzWVk0X1XQzGeV0kys+0b9M5xkwcwUndXDF6WNnO6hL2HsO9GR6UjqlK28FglOuVpMuIw+JFTjrJLVeRRVpX1RKyvMpUpqdrrmuqFwdXmBxDhJSXzRrMJi4zjdPzXQzOMxGGlB1YTSlx3er6WOMHUulNStfxs34C9FfybG4GV+Ec7K97EyTBF8OJM4mwzkNSY4kBHNgjDUNiEwjQDYxXxMY8Xr05nOLqvhH5sgukRrXHR8fw9ndI2YZhU13OyvHVmZzbEVlHt311/SNFVs3u3Wrt5FPtFjoWcJbsklZNNXRMtrbWc58SMTUrN3u7+ZHo1HxOovtO3R8RpaaG0jC6Ob17jcjvghlO7HCtSFxNDs5UsyihTbvZcFf5FplErNGevTXHtsM11pxXWcfcsYQsrFJXxG8oL+eP0L6ErmDpRcTDQwO0Na87Lkb3MJpRbPM8xnvTk/E1+OeWXy38XOH4HNxUdLBnHU1YT04UrHW9r5obYlwBPT0XdDM5SicqbTJdJ3D0PY4DBTqPlFc3LRGqy/LqMJKUpynbuq1o39dSmw2+7Wuy+w2FnJJvQy1prnHhdQzCH8MvoOvFRfO3mivhSsKxP2P8Ayyn7yfAbbI0XYfUrlTTPXxc8x1fwCc7rEV1l9b/xqQt6CkjljvgYndSGXTOJ0tCaoaAnAxrt6pJZQqsnq1pxWj8DCbT5TOhK0pNp6q56xhafF+SKPbfK1Vo3XfTtHxLzPDLW/wAuPH4x1scRsh+rh5QnZrg/YZqQs2axnY4lINGPMMabZMWClZacWFvCzm2rXZ2LjNScd6D0krcVzs+TNXUyGE+3RuusGtU+i6lTs/SW4v15mloLd1WluBjrXl0zPjwzWMpzhKClFxe8tGWOGxj5k/H46W9ByjGa3v3uPB83wHaOY2svhQt6X80lqT4V+X/FZj4zlHsxk97hp9TE4zLp9t20T9T0nEZhUlwagtNI9FwWplc2pPf33qnoys3idZ1qeWRihyE1wZMzPC7naXAqZyNp5Ya/FNlRT4MZnSa5aDdLEtcdUOrFO4csLuaEKG8WuDwXDiHB4Kbi5y7K5Lr0NBluXNpOxlrTTGY7wGDS5FzTw47hcLukmVMybyIMqYxKDLT4I1OmA4q5RYt6xPeHOZYYocRfjCJH+mXQQFxppMXMTCuJtr04/i/Y7EEwigrySMXTb/UijC0SuzlXUV0bfoi1rcPIqM1np5Rf1NL4jnl+1YfHZVCau1ryZTwyDfe85WV3y6GwlTIeHjpL8ciPtXX9JxV4fJYQXC/iyX/o4ktsUWLpycNYbCqLvHTUsoMYhoOXBRjHrRPpJHUV0OMcuw/1wO6M7pMDdbpFxNJNNElsbmgDP5hgN6Hgrsy9DAznquGpvsRR3ouN7XTRGwOUd2nFeH3bLzrkY7zKyGBySrUlZRdk9X08jW5Xs01ZTtK3BtcF0NlhsujCKil2Vx04snYXDLUq6tc15PTL4jLUnCHW7fy4FnhsLZaCzH/uYR/9b/InwWhlr26fj/UzuWDCnqCs7Bw07ijR3KmNSpE3dA4D4nqH8E4dEnxgB0wHVf8ABfQJO+CEOH09JAgtQ3FHj8jbXpxfF+zqbJOEp636Eea1RYYRaNmeZ5bbvMuay0ZQ5zNKL/pj9TQT6GU2nqbu7+OL9E/18i9Twxx+yNIg4enpJ9ZN/r0Jcqi3b8rXI9DSKXr8/wDJg7nMogUBywkh9BQHUcRR3EQcVYXREwXds+Ta9CwZBcN2btwlb6Ao8cyDc4bAAo8kaPKsvUI3fea7T6LohrKcta7c12uS6f3LKpPkuHuXnP8AXL8u+/jHEnd6cFwRKwi0dyJclYZ6P5FsWdzCf/WrpuJfS5acim2h7GJhPrGP0bX2Lfe0Rnr26fiv4omKqaMg5fjLVHF8+BJxnC5n8RJxlCfSSv5MmNG6hqFxI+Aqb0UTIouIJUwqmOpBSAumvhoQ7YQDqJUDS4r5+4hGuvTm+L9jkuJPwvd+YhEZ9tvl9OZfcye1vdX4l7SEIvTDKpo/s/T3Q7AIjCu6ehn+YoiEI67jwCIQCOyNV4iECjcuY5gf2kPNCEEK+mxlw9SJEQjZwX2LHsNz+XuIQEzm1/fpfhl/9IsafdiIRnp0fF6QsV9ykx3df65iETGzT5N3S5XIQioiu48xR4iEUkRCEAf/2Q=='
                    alt='foto do perfil' />
                <h2>Perfil do usuário</h2>
            </div>
            <div className='card-photo'>
                <img
                    src='https://d1bvpoagx8hqbg.cloudfront.net/originals/new-york-night-ca4bea1ac36526dcd0ea097c9424c763.jpg'
                    alt='imagem' />
            </div>
            <div className='card-footer'>
                <div className='card-metadata'>
                    <img src={OutHeart} alt='Likes' />
                    <h3>65 pessoas curtiram</h3>
                </div>
                <div className='card-info'>
                    <p><a href='/feed'>Nome do usuário</a> Está é a descrição do post </p>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
