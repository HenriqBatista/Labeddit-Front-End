import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../context/UserContext"
import {PostContext} from "../context/PostContext"
import { useRequestData } from "../hooks/useRequestData";
import { useToast } from "../hooks/useToast";
import { goToCommentPage } from "../routes/coordinator";


export function CardPost ({post}) {
    const navigate = useNavigate()
    const {headers} = useContext(UserContext)
    const {likesDislikesPosts, setNewLikeOrDislikePost} = useContext(PostContext)
    const { requestData} = useRequestData()
    const {errorToast, Toast} = useToast()

  

    const handleSubmitLike = async (event) => {
        event.preventDefault()
        const response = await requestData(
            `posts/${post.id}/like`,
            "PUT",
            headers,
            { like: true },
          );
      
          response.status === 200
            ? setNewLikeOrDislikePost({ like: true })
            : errorToast((response.data));
    }
    const handleSubmitDislike = async (event) => {
        event.preventDefault()
        const response = await requestData(
            `posts/${post.id}/like`,
            "PUT",
            headers,
            { like: false },
          );
      
          response.status === 200
            ? setNewLikeOrDislikePost({ like: true })
            : errorToast((response.data));
    }

    const like = likesDislikesPosts.find(
      (likeDislike) => likeDislike.postId === post.id && likeDislike.like === true
    )
    const dislike = likesDislikesPosts.find(
      (likeDislike) => likeDislike.postId === post.id && likeDislike.like === false
    )

    return (
      <>
      <div className="card">
        <p className="sendby">
          Enviado Por: {post.creator.name}
        </p>
        <p>{post.content}</p>
        <div className="flex gap-3">
          <div className="infos">
            <button onClick={handleSubmitLike}>
            { like !== undefined ? (
                <svg
                  width="15"
                  height="17"
                  className="h-4 fill-dark-orange-labeddit hover:fill-none hover:stroke-dark-blue-gray"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.4,1.1C8.3,1,8.1,0.9,8,0.8S7.7,0.7,7.5,0.7c-0.2,0-0.3,0-0.5,0.1C6.9,0.9,6.8,1,6.7,1.1L1.2,8.1
                    C0.7,8.6,0.8,9.7,1.6,9.9c0.1,0,0.2,0,0.3,0l1.5,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2
                    l0,5.2c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3l4.9,0c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4
                    c0.1-0.1,0.1-0.3,0.1-0.4l0-5.2c0-0.1,0.1-0.3,0.1-0.3s0.2-0.1,0.3-0.1l1.6,0c1.1,0,1.2-1.3,0.7-1.8L8.4,1.1L8.4,1.1z"
                  />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  className="h-4 fill-dark-blue-gray hover:fill-dark-orange-labeddit"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.09076 1.53713C6.82256 0.613071 8.2243 0.611345 8.95808 1.53392L14.0657 7.95526C14.8337 8.92048 14.1539 10.3466 12.9208 10.3587L11.5331 10.3725L11.5318 15.0372C11.5318 15.2776 11.4844 15.5156 11.3923 15.7377C11.3002 15.9598 11.1652 16.1616 10.9951 16.3315C10.825 16.5014 10.6231 16.6361 10.4009 16.728C10.1788 16.8198 9.94065 16.867 9.70023 16.8668L5.34195 16.8628C4.85699 16.8623 4.39208 16.6692 4.04935 16.3261C3.70661 15.983 3.51408 15.5179 3.51404 15.033L3.51355 10.3735L2.15815 10.3727C0.91958 10.372 0.228693 8.94266 0.996975 7.97177L6.09076 1.53713V1.53713ZM8.27582 2.07618C8.18593 1.96317 8.07167 1.87192 7.94157 1.80926C7.81147 1.7466 7.6689 1.71414 7.52449 1.7143C7.38009 1.71447 7.23759 1.74726 7.10764 1.81022C6.97768 1.87318 6.86363 1.96469 6.77401 2.07791L1.68022 8.51255C1.36399 8.91259 1.64818 9.50094 2.15839 9.50143L3.94958 9.50217C4.0068 9.50217 4.06348 9.51343 4.11635 9.53533C4.16922 9.55723 4.21727 9.58933 4.25773 9.62979C4.2982 9.67026 4.3303 9.7183 4.3522 9.77118C4.37409 9.82405 4.38536 9.88072 4.38535 9.93795L4.38511 15.033C4.38518 15.287 4.4861 15.5307 4.6657 15.7104C4.84529 15.89 5.08888 15.9911 5.34293 15.9913L9.70122 15.9952C9.82714 15.9953 9.95184 15.9706 10.0682 15.9225C10.1846 15.8744 10.2903 15.8038 10.3794 15.7148C10.4685 15.6258 10.5392 15.5201 10.5874 15.4038C10.6356 15.2875 10.6605 15.1628 10.6605 15.0369L10.6618 9.94091C10.6617 9.82609 10.707 9.71591 10.7878 9.63431C10.8686 9.55271 10.9783 9.50629 11.0931 9.50513L12.9121 9.48738C13.4199 9.48246 13.6996 8.89509 13.3836 8.49776L8.27582 2.07618V2.07618Z" />
                </svg>
              )}
            </button>
            <p className="text-xs font-bold text-dark-blue-gray">{post.likes}</p>
            <button onClick={handleSubmitDislike}>
            {dislike !== undefined ? (
                <svg
                  width="15"
                  height="17"
                  className="h-4 fill-dark-blue-gray hover:stroke-dark-blue-gray hover:fill-none"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.7,16.1c0.1,0.1,0.2,0.2,0.4,0.3c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1c0.1-0.1,0.3-0.2,0.4-0.3
                  l5.5-6.9c0.4-0.5,0.4-1.6-0.5-1.9c-0.1,0-0.2,0-0.3,0l-1.5,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.2
                  c0-0.1,0-0.1,0-0.2l0-5.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3L5,0.5c-0.1,0-0.3,0-0.4,0.1C4.5,0.6,4.4,0.7,4.3,0.8
                  S4.1,1,4,1.2C4,1.3,4,1.4,4,1.6l0,5.2c0,0.1-0.1,0.3-0.1,0.3C3.7,7.2,3.6,7.3,3.5,7.3l-1.6,0c-1.1,0-1.2,1.3-0.7,1.8L6.7,16.1
                  L6.7,16.1z"
                  />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  className="h-4 fill-dark-blue-gray hover:fill-blue-800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.90924 15.3491C8.17744 16.2731 6.7757 16.2748 6.04192 15.3523L0.934338 8.93092C0.166302 7.9657 0.846098 6.53956 2.07924 6.52748L3.46693 6.51368L3.46817 1.84902C3.46822 1.6086 3.51565 1.37054 3.60773 1.14846C3.69982 0.926372 3.83477 0.724609 4.00487 0.554696C4.17496 0.384784 4.37687 0.250054 4.59906 0.158204C4.82124 0.0663538 5.05935 0.0191843 5.29977 0.0193909L9.65805 0.0233342C10.143 0.0238973 10.6079 0.216931 10.9507 0.560034C11.2934 0.903137 11.4859 1.36825 11.486 1.85321L11.4865 6.5127L12.8419 6.51343C14.0804 6.51417 14.7713 7.94352 14.003 8.91441L8.90924 15.3491V15.3491ZM6.72418 14.81C6.81407 14.923 6.92833 15.0143 7.05843 15.0769C7.18853 15.1396 7.3311 15.172 7.47551 15.1719C7.61991 15.1717 7.76241 15.1389 7.89236 15.076C8.02231 15.013 8.13637 14.9215 8.22599 14.8083L13.3198 8.37363C13.636 7.97359 13.3518 7.38524 12.8416 7.38475L11.0504 7.38401C10.9932 7.38401 10.9365 7.37275 10.8837 7.35085C10.8308 7.32895 10.7827 7.29685 10.7423 7.25639C10.7018 7.21592 10.6697 7.16788 10.6478 7.115C10.6259 7.06213 10.6146 7.00546 10.6146 6.94823L10.6149 1.85321C10.6148 1.59916 10.5139 1.35552 10.3343 1.17583C10.1547 0.99614 9.91112 0.895094 9.65707 0.894892L5.29878 0.890949C5.17286 0.890854 5.04816 0.915571 4.93179 0.963685C4.81542 1.0118 4.70968 1.08237 4.62059 1.17136C4.53151 1.26036 4.46083 1.36603 4.41259 1.48235C4.36436 1.59867 4.33951 1.72335 4.33948 1.84927L4.33825 6.94527C4.33827 7.06009 4.29297 7.17027 4.2122 7.25187C4.13143 7.33347 4.02171 7.37989 3.9069 7.38105L2.08787 7.39879C1.58012 7.40372 1.30036 7.99109 1.61635 8.38842L6.72418 14.81V14.81Z" />
                </svg>
              )}
            </button>
          </div>
                <div className="infos w-16 hover:bg-lighter-gray cursor-pointer" onClick={()=> goToCommentPage(navigate, post.id)}>
                <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              className="h-4 fill-dark-blue-gray"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.11472 10.5859H12.7067C13.543 10.5859 14.2001 9.9204 14.2001 9.12427V2.8616C14.2001 2.06547 13.543 1.4 12.7067 1.4H2.62672C1.79046 1.4 1.13339 2.06547 1.13339 2.8616V9.12427C1.13339 9.9204 1.79046 10.5859 2.62672 10.5859H4.12006V13.5333H4.12286L4.12472 13.5324L8.11566 10.5859H8.11472ZM4.68006 14.2828C4.48137 14.4293 4.23312 14.4919 3.98874 14.4571C3.74437 14.4224 3.52339 14.2931 3.37339 14.0971C3.25314 13.9386 3.18792 13.7453 3.18766 13.5464V11.5192H2.62766C1.28739 11.5192 0.200989 10.4468 0.200989 9.12427V2.8616C0.200056 1.53907 1.28646 0.466667 2.62672 0.466667H12.7067C14.047 0.466667 15.1334 1.53907 15.1334 2.8616V9.12427C15.1334 10.4477 14.047 11.5192 12.7067 11.5192H8.42272L4.67912 14.2828H4.68006Z" />
            </svg>
                <p className="text-xs font-bold text-dark-gray">{post.comments}</p>
                </div>
        </div>
      </div>
      </>
    )
}